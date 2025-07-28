const About = () => {
  return (
    <main className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-text">About Analycian</h2>
        <p className="text-text mb-4">
          Analycian is a web-based application designed to help small to medium-sized businesses make data-driven decisions. Our platform allows you to upload, process, and analyze data in .csv and .xlsx formats, providing intuitive dashboards and insights to reduce costs and maximize profits.
        </p>
        <a
          href="/"
          className="text-secondary hover:underline"
        >
          Try uploading your data now
        </a>
      </div>
    </main>
  );
};