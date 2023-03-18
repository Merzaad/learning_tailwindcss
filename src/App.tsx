function App() {
  return (
    <div className='grid grid-cols-1 gap-5 p-2 md:grid-cols-4'>
      <header className='flex h-40 items-center justify-center rounded-lg border  border-green-400 p-4 md:col-span-4'>
        <div className='w-100 flex h-full w-full items-center justify-center rounded-lg border border-green-500'>
          main
        </div>
      </header>
      <main className='flex h-40 items-center justify-center rounded-lg border border-indigo-900 md:col-span-3'>
        main
      </main>
      <aside className='flex h-40 items-center justify-center rounded-lg border border-yellow-500 md:col-span-1'>
        aside
      </aside>
      <footer className='flex h-40 items-center justify-center rounded-lg border border-sky-500 md:col-span-4'>
        footer test
      </footer>
    </div>
  )
}

export default App
