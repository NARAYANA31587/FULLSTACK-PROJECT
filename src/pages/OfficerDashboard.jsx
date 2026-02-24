import { TrendingUp, DollarSign, Award, Users } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatCard from '../components/StatCard';
import { mockStats, mockChartData } from '../data/mockData';

const OfficerDashboard = () => {
  const stats = mockStats.officer;

  const departmentData = [
    { name: 'CSE', placements: 145 },
    { name: 'ECE', placements: 98 },
    { name: 'ME', placements: 76 },
    { name: 'EE', placements: 89 },
    { name: 'Civil', placements: 54 },
  ];

  const packageData = [
    { range: '0-5 LPA', count: 120 },
    { range: '5-10 LPA', count: 245 },
    { range: '10-15 LPA', count: 156 },
    { range: '15-20 LPA', count: 78 },
    { range: '20+ LPA', count: 34 },
  ];

  const companyData = [
    { name: 'Product', value: 35 },
    { name: 'Service', value: 45 },
    { name: 'Startup', value: 20 },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899'];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <h1 className="text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">Placement Officer Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl font-medium">Analytics, reports, and placement insights</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={Users} title="Total Placements" value={stats.totalPlacements} color="bg-blue-500" trend="+15%" />
          <StatCard icon={DollarSign} title="Avg Package" value={stats.avgPackage} color="bg-green-500" trend="+8%" />
          <StatCard icon={Award} title="Top Package" value={stats.topPackage} color="bg-purple-500" />
          <StatCard icon={TrendingUp} title="Placement Rate" value={stats.placementRate} color="bg-yellow-500" trend="+5%" />
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Placement Trend */}
          <div className="card">
            <h2 className="text-2xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Placement Trend (2024)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
                <Legend />
                <Line type="monotone" dataKey="placements" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Department-wise Placements */}
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Department-wise Placements</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="placements" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Package Distribution */}
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Package Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={packageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="range" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="count" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Company Type Distribution */}
          <div className="card">
            <h2 className="text-xl font-bold mb-4">Company Type Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={companyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {companyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Companies */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Top Recruiting Companies</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Google', hires: 45, package: '₹22 LPA' },
              { name: 'Microsoft', hires: 38, package: '₹20 LPA' },
              { name: 'Amazon', hires: 52, package: '₹18 LPA' },
              { name: 'Flipkart', hires: 34, package: '₹15 LPA' },
              { name: 'TCS', hires: 89, package: '₹8 LPA' },
              { name: 'Infosys', hires: 67, package: '₹7 LPA' },
            ].map((company, idx) => (
              <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold">{company.name}</h3>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Hires: <span className="font-bold text-primary">{company.hires}</span></span>
                  <span className="text-gray-600 dark:text-gray-400">Avg: <span className="font-bold text-green-500">{company.package}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerDashboard;
