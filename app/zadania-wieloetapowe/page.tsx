"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

const tasksByCategory = [
  {
    category: "Nierówności kwadratowe",
    tasks: [
      {
        id: "100",
        title: "Zadanie 1",
        img: "/problemImages/problem1.png",
      },
      {
        id: "101",
        title: "Zadanie 2",
        img: "/problemImages/problem2.png",
      },
      {
        id: "102",
        title: "Zadanie 3",
        img: "/problemImages/problem3.png",
      },
      {
        id: "103",
        title: "Zadanie 4",
        img: "/problemImages/problem4.png",
      },
      {
        id: "104",
        title: "Zadanie 5",
        img: "/problemImages/problem5.png",
      },
      {
        id: "105",
        title: "Zadanie 6",
        img: "/problemImages/problem6.png",
      },
      {
        id: "106",
        title: "Zadanie 7",
        img: "/problemImages/problem7.png",
      },
      {
        id: "107",
        title: "Zadanie 8",
        img: "/problemImages/problem8.png",
      },
      {
        id: "108",
        title: "Zadanie 9",
        img: "/problemImages/problem9.png",
      },
      {
        id: "109",
        title: "Zadanie 10",
        img: "/problemImages/problem10.png",
      },
    ],
  },
  {
    category: "Równania wymierne",
    tasks: [
      {
        id: "200",
        title: "Zadanie 11",
        img: "/problemImages/problem11.png",
      },
      {
        id: "201",
        title: "Zadanie 12",
        img: "/problemImages/problem12.png",
      },
      {
        id: "202",
        title: "Zadanie 13",
        img: "/problemImages/problem13.png",
      },
      {
        id: "203",
        title: "Zadanie 14",
        img: "/problemImages/problem14.png",
      },
      {
        id: "204",
        title: "Zadanie 15",
        img: "/problemImages/problem15.png",
      },
      {
        id: "205",
        title: "Zadanie 16",
        img: "/problemImages/problem205.png",
      },
      {
        id: "206",
        title: "Zadanie 17",
        img: "/problemImages/problem206.png",
      },
      {
        id: "207",
        title: "Zadanie 18",
        img: "/problemImages/problem207.png",
      },
      {
        id: "208",
        title: "Zadanie 19",
        img: "/problemImages/problem208.png",
      },
      {
        id: "209",
        title: "Zadanie 20",
        img: "/problemImages/problem209.png",
      },
    ],
  },
  {
    category: "Obliczanie logarytmu",
    tasks: [
      {
        id: "300",
        title: "Zadanie 21",
        img: "/problemImages/problem300.png",
      },
      {
        id: "301",
        title: "Zadanie 22",
        img: "/problemImages/problem301.png",
      },
      {
        id: "302",
        title: "Zadanie 23",
        img: "/problemImages/problem302.png",
      },
      {
        id: "303",
        title: "Zadanie 24",
        img: "/problemImages/problem303.png",
      },
      {
        id: "304",
        title: "Zadanie 25",
        img: "/problemImages/problem304.png",
      },
      {
        id: "305",
        title: "Zadanie 26",
        img: "/problemImages/problem305.png",
      },
      {
        id: "306",
        title: "Zadanie 27",
        img: "/problemImages/problem306.png",
      },
      {
        id: "307",
        title: "Zadanie 28",
        img: "/problemImages/problem307.png",
      },
      {
        id: "308",
        title: "Zadanie 29",
        img: "/problemImages/problem308.png",
      },
      {
        id: "309",
        title: "Zadanie 30",
        img: "/problemImages/problem309.png",
      },
    ]
  },
  {
    category: "Potęgi",
    tasks: [
      {
        id: "500",
        title: "Zadanie 31",
        img: "/problemImages/problem500.png",
      },
      {
        id: "501",
        title: "Zadanie 31",
        img: "/problemImages/problem501.png",
      },
      {
        id: "502",
        title: "Zadanie 32",
        img: "/problemImages/problem502.png",
      },
      {
        id: "503",
        title: "Zadanie 33",
        img: "/problemImages/problem503.png",
      },
      {
        id: "504",
        title: "Zadanie 34",
        img: "/problemImages/problem504.png",
      },
      {
        id: "505",
        title: "Zadanie 35",
        img: "/problemImages/problem505.png",
      },
      {
        id: "506",
        title: "Zadanie 36",
        img: "/problemImages/problem506.png",
      },
      {
        id: "507",
        title: "Zadanie 37",
        img: "/problemImages/problem507.png",
      },
      {
        id: "508",
        title: "Zadanie 33",
        img: "/problemImages/problem508.png",
      },
      {
        id: "509",
        title: "Zadanie 33",
        img: "/problemImages/problem509.png",
      },
    ]
  },
  {
    category : "Ciągi trzywyrazowe",
    tasks : [
      {
        id: "400",
        title: "Zadanie 27",
        img: "/problemImages/problem400.png",
      },
      {
        id: "401",
        title: "Zadanie 28",
        img: "/problemImages/problem401.png",
      },
      {
        id: "402",
        title: "Zadanie 29",
        img: "/problemImages/problem402.png",
      },
      {
        id: "403",
        title: "Zadanie 30",
        img: "/problemImages/problem403.png",
      },
      {
        id: "404",
        title: "Zadanie 31",
        img: "/problemImages/problem404.png",
      },
      {
        id: "405",
        title: "Zadanie 32",
        img: "/problemImages/problem405.png",
      },
      {
        id: "406",
        title: "Zadanie 33",
        img: "/problemImages/problem406.png",
      },
      {
        id: "407",
        title: "Zadanie 34",
        img: "/problemImages/problem407.png",
      },
      {
        id: "408",
        title: "Zadanie 35",
        img: "/problemImages/problem408.png",
      },
      {
        id: "409",
        title: "Zadanie 36",
        img: "/problemImages/problem409.png",
      }
    ]
  },
  {
  category : "Proste równoległe i prostopadłe",
  tasks : [
    {
      id: "600",
      title: "Zadanie 60",
      img: "/problemImages/problem600.png",
    },
    {
      id: "601",
      title: "Zadanie 61",
      img: "/problemImages/problem601.png",
    },
    {
      id: "602",
      title: "Zadanie 62",
      img: "/problemImages/problem602.png",
    },
    {
      id: "603",
      title: "Zadanie 63",
      img: "/problemImages/problem603.png",
    },
    {
      id: "604",
      title: "Zadanie 64",
      img: "/problemImages/problem604.png",
    },
    {
      id: "605",
      title: "Zadanie 65",
      img: "/problemImages/problem605.png",
    },
    {
      id: "606",
      title: "Zadanie 66",
      img: "/problemImages/problem606.png",
    },
    {
      id: "607",
      title: "Zadanie 67",
      img: "/problemImages/problem607.png",
    },
    {
      id: "608",
      title: "Zadanie 68",
      img: "/problemImages/problem608.png",
    },
    {
      id: "609",
      title: "Zadanie 69",
      img: "/problemImages/problem609.png",
    }]
  },
    {
    category : "Długość odcinka",
  tasks : [
    {
      id: "700",
      title: "Zadanie 70",
      img: "/problemImages/problem700.png",
    },
    {
      id: "701",
      title: "Zadanie 71",
      img: "/problemImages/problem701.png",
    },
    {
      id: "702",
      title: "Zadanie 72",
      img: "/problemImages/problem702.png",
    },
    {
      id: "703",
      title: "Zadanie 73",
      img: "/problemImages/problem703.png",
    },
    {
      id: "704",
      title: "Zadanie 74",
      img: "/problemImages/problem704.png",
    }
  ]
}
  
];

const SolutionsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Lista Rozwiązań
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Kliknij na zadanie, aby zobaczyć jego rozwiązanie.
        </p>

        {tasksByCategory.map((category) => (
          <div key={category.category} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.tasks.map((task) => (
                <Link key={task.id} href={`/zadanie-wieloetapowe/${task.id}`}>
                  <div className="bg-white shadow-md border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:bg-blue-100 transition">
                    <img
                      src={task.img}
                      alt={task.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold text-gray-800">
                        {task.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;