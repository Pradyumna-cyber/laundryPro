'use client';
import Link from 'next/link';

const people = ['Pradyumna', 'Rahul', 'Sneha'];

export default function PeopleList() {
  return (
    <div style={{ padding: 20 }}>
      <h2>👥 People List</h2>
      <ul>
        {people.map((person, idx) => (
          <li key={idx}>
            <Link href="/homepage_admin/history">{person}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
