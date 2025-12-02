// In your BotResponse.tsx file
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';

interface MarkdownMessageProps {
  content: string;
  showCursor?: boolean;
}

const MarkdownMessage: React.FC<MarkdownMessageProps> = ({ content, showCursor = false }) => {
  const components: Components = {
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-foreground" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="italic text-foreground" {...props}>
        {children}
      </em>
    ),
    p: ({ children, ...props }) => (
      <p className="mb-2 last:mb-0" {...props}>
        {children}
      </p>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside space-y-1 ml-2" {...props}>
        {children}
      </ol>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside space-y-1 ml-2" {...props}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }) => (
      <li className="text-sm" {...props}>
        {children}
      </li>
    ),
    br: (props) => <br {...props} />,
  };

  return (
    <div className="text-sm leading-relaxed prose prose-sm max-w-none">
      <ReactMarkdown components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownMessage;
