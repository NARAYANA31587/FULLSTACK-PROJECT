const StatCard = ({ icon: Icon, title, value, color, trend }) => {
  return (
    <div className="stat-card group">
      <div className="flex items-center justify-between relative z-10">
        <div className="flex-1">
          <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">{title}</p>
          <p className="text-5xl font-black mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{value}</p>
          {trend && (
            <div className="flex items-center mt-3 space-x-2">
              <span className="text-sm font-bold text-green-500 flex items-center bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                {trend}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-6 rounded-3xl ${color} shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative`}>
          <Icon className="w-12 h-12 text-white" strokeWidth={2.5} />
          <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
