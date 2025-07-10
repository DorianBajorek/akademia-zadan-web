'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import { CheckCircle, ChevronLeft, ChevronRight, Award, Trophy, Zap, Star } from 'lucide-react';
import { getActivityDays, getStreak, getTotalSolved, getUserData, getBadges } from '@/service';
import { useAuth } from '../UserData';
import LoadingSpinner from '@/components/LoadingSpinner';

dayjs.locale('pl');

const UserProfile: React.FC = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    photo: '/default-avatar.png',
    stats: {
      solved: 0,
      topics: 0,
      streak: 0,
    },
  });

  const [activityData, setActivityData] = useState<string[]>([]);
  const [badges, setBadges] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentDate, setCurrentDate] = useState(dayjs());
  const { token } = useAuth();

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDayOfWeek = startOfMonth.day();
  const daysInMonth = endOfMonth.date();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
  const nextMonth = () => setCurrentDate(currentDate.add(1, 'month'));
  const formattedMonthYear = currentDate.format('MMMM YYYY');

  useEffect(() => {
    const fetchAll = async () => {
      if (!token) return;

      try {
        const [userData, streakData, solvedData, activityDaysData, badgesData] = await Promise.all([
          getUserData(token),
          getStreak(token),
          getTotalSolved(token),
          getActivityDays(token),
          getBadges(token),
        ]);

        setUser((prev) => ({
          ...prev,
          username: userData.username,
          email: userData.email,
          stats: {
            ...prev.stats,
            solved: solvedData.total_completed_tasks,
            streak: streakData.current_streak,
          },
        }));

        setActivityData(activityDaysData.activity_days);
        setBadges(badgesData.badges || []);
      } catch (error) {
        console.error('Błąd pobierania danych użytkownika:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, [token]);

  const generateCalendar = () => {
    const days = [];

    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = currentDate.date(day);
      const dateStr = dateObj.format('YYYY-MM-DD');
      const isActive = activityData.includes(dateStr);

      days.push(
        <div
          key={day}
          className={`relative h-10 w-10 flex items-center justify-center text-sm rounded-full 
          ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-50 text-gray-500'} 
          border ${isActive ? 'border-blue-600' : 'border-gray-200'} font-medium`}
          title={isActive ? `Aktywność w dniu ${dateStr}` : ''}
        >
          {day}
          {isActive && (
            <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-blue-600 rounded-full flex items-center justify-center">
              <CheckCircle className="h-3 w-3 text-white" />
            </div>
          )}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-2 mt-4">{days}</div>;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
        {isLoading ? (
          <LoadingSpinner isLoading={isLoading} />
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Twój profil</h1>
              <p className="text-gray-600 mt-2">Śledź swoje postępy i osiągnięcia</p>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md border border-gray-200 p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="relative">
                  <div className="relative h-32 w-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <Image
                      src={'/profile.jpg'}
                      alt="Zdjęcie profilowe"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.username}</h2>
                    <p className="text-gray-600 flex items-center justify-center md:justify-start">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {user.email}
                      </span>
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-semibold text-gray-800 mb-4 text-lg flex items-center">
                      <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                      Statystyki nauki
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-100 text-center">
                        <div className="text-3xl font-bold text-blue-700">{user.stats.solved}</div>
                        <div className="text-sm text-blue-600 font-medium">Zadania rozwiązane</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-100 text-center">
                        <div className="text-3xl font-bold text-purple-700">
                          {user.stats.topics}
                        </div>
                        <div className="text-sm text-purple-600 font-medium">Tematy ukończone</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-100 text-center">
                        <div className="text-3xl font-bold text-green-700">{user.stats.streak}</div>
                        <div className="text-sm text-green-600 font-medium">Dni serii</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    Kalendarz aktywności
                  </h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevMonth}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <span className="text-sm font-medium text-gray-700 px-2">
                      {formattedMonthYear}
                    </span>
                    <button
                      onClick={nextMonth}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="mb-2 grid grid-cols-7 gap-2 text-center">
                  {['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'].map((day) => (
                    <div key={day} className="text-xs font-medium text-gray-500 py-1">
                      {day}
                    </div>
                  ))}
                </div>

                {generateCalendar()}
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Trophy className="h-5 w-5 text-amber-500 mr-2" />
                  Twoje odznaki
                </h2>

                {badges.length === 0 ? (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">Jeszcze nie zdobyłeś żadnych odznak</p>
                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-sm transition-colors">
                      Rozpocznij naukę
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {badges.map((badge, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors"
                      >
                        <div className="relative w-32 h-32 mb-4">
                          <Image
                            src={`/badges/${badge}.png`}
                            alt={badge}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="font-medium text-gray-800 text-center text-sm capitalize">
                          {badge.replace(/-/g, ' ')}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default UserProfile;
