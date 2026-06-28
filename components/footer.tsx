export default function Footer() {
return ( <footer className="mt-20 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">

  <div className="max-w-7xl mx-auto px-6 py-12">

    <div className="grid md:grid-cols-2 gap-8">

      <div>
        <h2 className="text-2xl font-bold text-white">
          Patcharin Portfolio
        </h2>

        <p className="text-gray-400 mt-3 leading-7">
          Digital Technology and Innovation Student
        </p>
      </div>

      <div className="md:text-right">

        <h3 className="text-lg font-semibold text-blue-400">
          Contact
        </h3>

        <div className="mt-3 space-y-2 text-gray-400">
          <p>patcharinn.tl@gmail.com</p>
          <p>063-202-1772</p>
          <p>github.com/patcharin-T</p>
        </div>

      </div>

    </div>

    <div className="mt-10 pt-6 border-t border-slate-800 text-center text-gray-500 text-sm">
      © 2026 Patcharin Thonglam. All Rights Reserved.
    </div>

  </div>

</footer>

);
}
