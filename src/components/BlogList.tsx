import React, { useState, useMemo } from "react";
import BlogCard from "./BlogCard";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface BlogListProps {
  t: any;
  currentLang: string;
}

const BlogList: React.FC<BlogListProps> = ({ t, currentLang }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(t.blog.articles.map((a: any) => a.category))];
    return cats;
  }, [t.blog.articles]);

  const filteredArticles = useMemo(() => {
    return t.blog.articles.filter((article: any) => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, t.blog.articles]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat: any) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-christmas-red text-white shadow-md shadow-red-900/10"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder={t.blog.searchPlaceholder}
              className="pl-10 h-11 bg-white border-gray-200 focus:ring-christmas-red rounded-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
            <p className="text-gray-500 text-sm">
                Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
            </p>
        </div>

        {/* Article Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article: any) => (
              <BlogCard key={article.id} article={article} t={t} currentLang={currentLang} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-500 text-lg font-medium">{t.blog.noResults}</p>
            <button 
                onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                className="mt-4 text-christmas-red font-semibold hover:underline"
            >
                Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
