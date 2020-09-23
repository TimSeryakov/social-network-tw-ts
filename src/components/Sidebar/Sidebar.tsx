import React from 'react';


export const Sidebar = () => {
  return (
      <aside className="w-40 bg-gray-900 h-full">
        <ul className="pt-3">
          <li className=""><a href="#" className="text-white block hover:bg-gray-800 py-1 pl-6">Profile</a></li>
          <li className=""><a href="#" className="text-white block hover:bg-gray-800 py-1 pl-6">Messages</a></li>
          <li className=""><a href="#" className="text-white block hover:bg-gray-800 py-1 pl-6">News</a></li>
          <li className=""><a href="#" className="text-white block hover:bg-gray-800 py-1 pl-6">Music</a></li>
          <li className="mt-3"><a href="#" className="text-white block hover:bg-gray-800 py-1 pl-6">Settings</a></li>
        </ul>
      </aside>
  )
}