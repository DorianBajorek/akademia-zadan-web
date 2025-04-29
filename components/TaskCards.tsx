"use client";
import Link from "next/link";
import Image from "next/image";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

interface Task {
  id: string;
  title: string;
  description: string;
  img: string;
  isCompleted: boolean;
}

interface TaskCardsProps {
  tasks: Task[];
}

const TaskCards = ({ tasks }: TaskCardsProps) => {
  return (
    <>
      {tasks.map((task) => (
        <Link
          key={task.id}
          href={`/zadanie-wieloetapowe/${task.id}`}
          className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-200 overflow-hidden relative"
        >
          {task.isCompleted && (
            <div className="absolute top-2 right-2 z-10">
              <CheckCircleIcon className="w-8 h-8 text-green-500 drop-shadow-sm" />
            </div>
          )}

          <div className="relative h-48">
            <Image
              src={task.img}
              alt="Ilustracja zadania"
              width={300}
              height={200}
              quality={100}
              className="object-contain absolute inset-0 m-auto max-h-full max-w-full opacity-90 group-hover:opacity-100 transition-opacity"
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-xl font-bold text-white">{task.title}</h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-600 mb-4">{task.description}</p>

            <div className="flex items-center justify-between">
              <div className={`flex items-center space-x-2 ${
                task.isCompleted ? 'text-green-600' : 'text-gray-400'
              }`}>
                {task.isCompleted ? (
                  <>
                    <CheckCircleIcon className="w-5 h-5" />
                    <span className="font-medium">Rozwiązane</span>
                  </>
                ) : (
                  <>
                    <XCircleIcon className="w-5 h-5" />
                    <span className="font-medium">Do wykonania</span>
                  </>
                )}
              </div>
              <div className="text-blue-600 group-hover:text-blue-800 transition-colors">
                {task.isCompleted ? "Sprawdź ponownie →" : "Rozwiąż teraz →"}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default TaskCards;