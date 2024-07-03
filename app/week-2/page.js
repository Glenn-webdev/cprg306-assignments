import StudentInfo from "./student-info";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className justify><h1>Shopping List</h1>
        <StudentInfo></StudentInfo>
        </div>
      </main>
    );
  }
  