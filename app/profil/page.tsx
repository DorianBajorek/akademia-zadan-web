"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import { CheckCircle } from "lucide-react";
import { getActivityDays, getStreak, getTotalSolved, getUserData } from "@/service";
import { useAuth } from "../UserData";
import LoadingSpinner from "@/components/LoadingSpinner";

dayjs.locale("pl");

const UserProfile: React.FC = () => {
  const [user, setUser] = useState({
    username: "MatematycznyEkspert",
    email: "ekspert@matematyka.pl",
    photo: "/default-avatar.png",
    stats: {
      solved: 0,
      topics: 0,
      streak: 0,
    },
  });

  const [activityData, setActivityData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [badges] = useState([
    { src: "/badges/mistrzPoteg.png", title: "Mistrz Potęg", description: "Rozwiązałeś 50 zadań z potęgowania" },
    { src: "/badges/ekspertRzeczywistosci.png", title: "Ekspert Rzeczywistości", description: "Zrealizowałeś 10 zadań tekstowych" },
    { src: "/badges/wladcaUlamkow.png", title: "Władca Ułamków", description: "Rozwiązałeś 50 zadań z ułamkami" },
    { src: "/badges/wladcaParabol.png", title: "Władca Parabol", description: "Rozwiązałeś 50 zadań z funkcji kwadratowej" },
  ]);

  const [currentDate, setCurrentDate] = useState(dayjs());
  const { token } = useAuth();

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDayOfWeek = startOfMonth.day();
  const daysInMonth = endOfMonth.date();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));
  const formattedMonthYear = currentDate.format("MMMM YYYY");

  useEffect(() => {
    const fetchAll = async () => {
      if (!token) return;

      try {
        const [userData, streakData, solvedData, activityDaysData] = await Promise.all([
          getUserData(token),
          getStreak(token),
          getTotalSolved(token),
          getActivityDays(token),
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
      } catch (error) {
        console.error("Błąd pobierania danych użytkownika:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, [token]);

  const generateCalendar = () => {
    const days = [];

    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 sm:h-10"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = currentDate.date(day);
      const dateStr = dateObj.format("YYYY-MM-DD");
      const isActive = activityData.includes(dateStr);

      days.push(
        <div
          key={day}
          className={`relative h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center text-sm rounded-md 
          ${isActive ? "bg-blue-50 text-blue-600" : "bg-gray-100 text-gray-600"} transition-colors`}
          title={isActive ? `Aktywność w dniu ${dateStr}` : ""}
        >
          {day}
          {isActive && (
            <CheckCircle className="absolute -top-2 -right-2 h-6 w-6 text-blue-500" />
          )}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-1.5 mt-4">{days}</div>;
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
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Twój profil</h1>
              <p className="text-gray-500 mt-2">Śledź swoje postępy i osiągnięcia</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative group">
                  <Image
                    src={"/profile.jpg"}
                    alt="Zdjęcie profilowe"
                    width={140}
                    height={140}
                    className="rounded-full border-4 border-white shadow-md group-hover:border-blue-200 transition-colors"
                  />
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    Nazwa użytkowika: {user.username}
                  </h2>
                  <p className="text-gray-600 mb-6">Email: {user.email}</p>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl shadow-inner">
                    <h3 className="font-semibold text-blue-800 mb-3 text-lg">Statystyki</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <div className="text-2xl font-bold text-blue-600">{user.stats.solved}</div>
                        <div className="text-sm text-gray-500">Zadania rozwiązane</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <div className="text-2xl font-bold text-indigo-600">{user.stats.topics}</div>
                        <div className="text-sm text-gray-500">Tematy ukończone</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <div className="text-2xl font-bold text-green-600">{user.stats.streak}</div>
                        <div className="text-sm text-gray-500">Dni serii</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
              <div className="mb-3 flex justify-center items-center gap-4">
                <button onClick={prevMonth} className="text-sm px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300">
                  ← Poprzedni
                </button>
                <span className="text-sm font-medium text-gray-700">{formattedMonthYear}</span>
                <button onClick={nextMonth} className="text-sm px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300">
                  Następny →
                </button>
              </div>

              <div className="flex justify-center">
                <div className="max-w-2xl w-full">{generateCalendar()}</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Twoje odznaki</h2>

              {badges.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Jeszcze nie zdobyłeś żadnych odznak</p>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Rozpocznij naukę
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {badges.map((badge, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-colors group"
                    >
                      <div className="relative w-40 h-40 mb-3">
                        <Image
                          src={badge.src}
                          alt={badge.title}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-center">{badge.title}</h3>
                      <p className="text-xs text-gray-500 text-center mt-1">{badge.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default UserProfile;
