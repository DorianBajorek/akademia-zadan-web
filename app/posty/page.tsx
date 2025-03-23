"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { postsMap } from "../post/[id]/postsMap";

interface PostMetadata {
  id: string;
  title: string;
  image?: string;
}

const PostsPage = () => {
  const postIds = Object.keys(postsMap);

  const postsMetadata: PostMetadata[] = [
    { id: "1", title: "Rozwiązywanie równań wielomianowych", image: "/post-images/rownaniawymierne.png" },
    { id: "2", title: "Rozwiązywanie równań wielomianowych - zadania otwarte", image: "/post-images/header-rownania-wielomianowe.png" },
    { id: "3", title: "Działania na potęgach", image: "/post-images/header-potegi-pierwiastki.png" },
    { id: "4", title: "Przekształcenia trygonometryczne", image: "/post-images/header-potegi-pierwiastki.png" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Lista Postów
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Kliknij na post, aby przeczytać jego treść.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsMetadata.map((post) => (
            <Link key={post.id} href={`/post/${post.id}`}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-blue-500 font-semibold hover:text-blue-700 transition-colors">
                    Czytaj więcej →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostsPage;