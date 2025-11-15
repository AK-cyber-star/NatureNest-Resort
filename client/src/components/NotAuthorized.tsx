export default function NotAuthorized() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl font-bold mb-4">401 - Not Authorized</h1>
        <p className="text-lg text-gray-700">
          You do not have permission to view this page.
        </p>
      </div>
    );
  }
  