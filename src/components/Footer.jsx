export default function Footer() {
  return (
    <footer className="bg-white shadow-inner py-5">
      <div className="max-w-[1440px] mx-auto text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TicketX. All rights reserved.
      </div>
    </footer>
  );
}
