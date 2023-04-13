const Skeleton = () => {
  return (
    <div role="status" className="w-full animate-pulse">
      <div className="h-6 bg-gray-200 rounded-full mb-4"></div>
      <div className="h-6 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-6 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-6 bg-gray-200 rounded-full"></div>
    </div>
  );
};

export default Skeleton;
