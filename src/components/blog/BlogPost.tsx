import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";

interface BlogPostProps {
  blog: {
    id: string;
    title: string;
    summary: string;
    category: string;
    readTime: string;
    date: string;
    content: string;
  };
  onBack: () => void;
}

const BlogPost = ({ blog, onBack }: BlogPostProps) => {
  const formatContent = (content: string) => {
    // Split content by lines and process each line
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (!line) {
        elements.push(<br key={key++} />);
        continue;
      }

      // Headers
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-2xl font-bold text-foreground mt-8 mb-4">
            {line.substring(4)}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="text-3xl font-bold text-foreground mt-12 mb-6">
            {line.substring(3)}
          </h2>
        );
      } else if (line === '---') {
        elements.push(
          <hr key={key++} className="my-8 border-t border-border" />
        );
      } else if (line.startsWith('- ')) {
        // Handle bullet points
        let listItems = [line.substring(2)];
        while (i + 1 < lines.length && lines[i + 1].trim().startsWith('- ')) {
          i++;
          listItems.push(lines[i].trim().substring(2));
        }
        
        elements.push(
          <ul key={key++} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {formatInlineText(item)}
              </li>
            ))}
          </ul>
        );
      } else if (/^\d+\.\s/.test(line)) {
        // Handle numbered lists
        let listItems = [line];
        while (i + 1 < lines.length && /^\d+\.\s/.test(lines[i + 1].trim())) {
          i++;
          listItems.push(lines[i].trim());
        }
        
        elements.push(
          <ol key={key++} className="list-decimal list-inside space-y-4 mb-6 text-muted-foreground">
            {listItems.map((item, idx) => {
              const match = item.match(/^\d+\.\s(.+)/);
              if (match) {
                const content = match[1];
                const parts = content.split('\n    ');
                return (
                  <li key={idx} className="leading-relaxed">
                    <strong className="text-foreground">{formatInlineText(parts[0])}</strong>
                    {parts[1] && (
                      <p className="mt-2 ml-4 text-sm">{formatInlineText(parts[1])}</p>
                    )}
                  </li>
                );
              }
              return null;
            })}
          </ol>
        );
      } else {
        // Regular paragraphs
        elements.push(
          <p key={key++} className="text-muted-foreground leading-relaxed mb-6">
            {formatInlineText(line)}
          </p>
        );
      }
    }

    return elements;
  };

  const formatInlineText = (text: string) => {
    // Handle bold text **text**
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
    
    return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 hover:bg-secondary"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Insights
        </Button>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <Badge variant="secondary">{blog.category}</Badge>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            {blog.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {blog.summary}
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6">
            {formatContent(blog.content)}
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Button>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4" />
              <span>Published by MedAI Team</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default BlogPost;
