import React from "react";
import { cn } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  article: {
    id: number;
    slug: string;
    title: string;
    description: string;
    category: string;
    readTime: number;
    image: string;
  };
  t: any;
  currentLang: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ article, t, currentLang }) => {
  return (
    <article className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-900 rounded-full shadow-sm">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{article.readTime} {t.blog.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-christmas-red transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 line-clamp-3 mb-6 flex-1">
          {article.description}
        </p>
        
        <a 
          href={import.meta.env.BASE_URL + (currentLang === 'ro' ? 'ro/blog/' : 'blog/') + article.slug}
          className="inline-flex items-center gap-2 text-sm font-bold text-christmas-red hover:opacity-80 transition-all uppercase tracking-wider"
        >
          {t.blog.viewArticle}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
