/* eslint-disable @next/next/no-img-element */
import { Header } from '@/components';
import React from 'react';

const maquinas = [
  { id: 1, description: 'maquina de teste', localization: 'setor b'},
  { id: 2, description: 'maquina de teste', localization: 'setor b'},
  { id: 3, description: 'maquina de teste', localization: 'setor b'},
  { id: 4, description: 'maquina de teste', localization: 'setor b'},
  { id: 5, description: 'maquina de teste', localization: 'setor b'},
]

const Machines: React.FC = () => {
  return (
    <main>
      <Header />
      
      <ul role="list" className="divide-y divide-gray-100">
        {maquinas.map((machine) => (
          <li key={machine.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              {/* <img alt="" src={machine.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" /> */}
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{machine.description}</p>
                {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">{machine.email}</p> */}
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{machine.localization}</p>
              {/* {machine.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime={machine.lastSeenDateTime}>{machine.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )} */}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Machines;