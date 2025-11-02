'use client';

import { useMemo, useState } from 'react';

function toKebabCase(input) {
  return input
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .replace(/_+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

function toSnakeCase(input) {
  return input
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/\s+/g, '_')
    .replace(/-+/g, '_')
    .replace(/_+/g, '_')
    .toLowerCase();
}

function toCamelCase(input) {
  const words = input
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[\s_-]+/g, ' ')
    .trim()
    .split(' ');
  if (words.length === 0) return '';
  return [
    words[0].toLowerCase(),
    ...words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()),
  ].join('');
}

function reverseString(input) {
  return [...input].reverse().join('');
}

export default function HomePage() {
  const [text, setText] = useState('ssss');

  const stats = useMemo(() => {
    const length = text.length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const charsNoSpace = text.replace(/\s+/g, '').length;
    return { length, words, charsNoSpace };
  }, [text]);

  const transformed = useMemo(() => {
    return {
      upper: text.toUpperCase(),
      lower: text.toLowerCase(),
      kebab: toKebabCase(text),
      snake: toSnakeCase(text),
      camel: toCamelCase(text),
      reversed: reverseString(text),
    };
  }, [text]);

  return (
    <section>
      <div className="card">
        <label htmlFor="input" className="label">Enter text</label>
        <input
          id="input"
          className="input"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type here..."
        />
      </div>

      <div className="grid">
        <div className="tile">
          <h3>Uppercase</h3>
          <code>{transformed.upper}</code>
        </div>
        <div className="tile">
          <h3>Lowercase</h3>
          <code>{transformed.lower}</code>
        </div>
        <div className="tile">
          <h3>Kebab case</h3>
          <code>{transformed.kebab}</code>
        </div>
        <div className="tile">
          <h3>Snake case</h3>
          <code>{transformed.snake}</code>
        </div>
        <div className="tile">
          <h3>Camel case</h3>
          <code>{transformed.camel}</code>
        </div>
        <div className="tile">
          <h3>Reversed</h3>
          <code>{transformed.reversed}</code>
        </div>
      </div>

      <div className="stats">
        <div className="stat"><span className="stat-num">{stats.length}</span><span className="stat-label">chars</span></div>
        <div className="stat"><span className="stat-num">{stats.words}</span><span className="stat-label">words</span></div>
        <div className="stat"><span className="stat-num">{stats.charsNoSpace}</span><span className="stat-label">chars no space</span></div>
      </div>
    </section>
  );
}
