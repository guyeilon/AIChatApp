import { MessageContent } from '../types/chat';

const TAGS_REGEX = /(.*?)?\[(image|video|link|quiz)\s+([^\]]+)\]/g;

const parseAttributes = (attrString: string): Record<string, string> => {
  const attrs: Record<string, string> = {};
  const attrRegex = /(\w+)="(.*?)"/g;

  for (
    let match = attrRegex.exec(attrString);
    match !== null;
    match = attrRegex.exec(attrString)
  ) {
    const [, key, value] = match;
    attrs[key] = value;
  }
  return attrs;
};

const parseTaggedContent = (input: string): MessageContent[] => {
  const result: MessageContent[] = [];
  const matches = Array.from(input.matchAll(TAGS_REGEX));

  let currentIndex = 0;

  matches.forEach((match) => {
    const [fullMatch, preText = '', tagType, attrString] = match;
    const matchIndex = match.index ?? 0;

    // Text before the tag
    const textBefore = input.slice(currentIndex, matchIndex) + preText;
    if (textBefore.trim()) {
      result.push({ type: 'text', value: textBefore.trim() });
    }

    const attrs = parseAttributes(attrString);

    switch (tagType) {
      case 'image':
        result.push({
          type: 'image',
          src: attrs.src,
          alt: attrs.alt || '',
        });
        break;

      case 'video':
        result.push({
          type: 'video',
          src: attrs.src,
          title: attrs.title || '',
        });
        break;

      case 'link':
        result.push({
          type: 'link',
          href: attrs.href,
          title: attrs.title || '',
        });
        break;

      case 'quiz':
        result.push({
          type: 'quiz',
          question: attrs.question,
          options: attrs.options?.split('|') ?? [],
          answer: attrs.answer,
        });
        break;

      default:
        console.warn(`Unhandled tag type: ${tagType}`);
        break;
    }

    currentIndex = matchIndex + fullMatch.length;
  });

  const remainingText = input.slice(currentIndex).trim();
  if (remainingText) {
    result.push({ type: 'text', value: remainingText });
  }

  return result;
};

export default parseTaggedContent;
