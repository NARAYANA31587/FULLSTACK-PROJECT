import { useState } from 'react';
import { Briefcase, FileText, CheckCircle, Clock, Search, MapPin, DollarSign } from 'lucide-react';
import StatCard from '../components/StatCard';
import { mockJobs, mockApplications, mockStats } from '../data/mockData';
import toast from 'react-hot-toast';

const StudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [applications, setApplications] = useState(mockApplications);
  const stats = mockStats.student;

  const filteredJobs = mockJobs.filter(job =>
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApply = (job) => {
    toast.success(`Applied to ${job.company} - ${job.position}`);
    setApplications([...applications, {
      id: applications.length + 1,
      jobId: job.id,
      company: job.company,
      position: job.position,
      status: 'Under Review',
      appliedDate: new Date().toISOString().split('T')[0]
    }]);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Shortlisted': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Rejected': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <h1 className="text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">Student Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl font-medium">Explore opportunities and track your applications</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={FileText} title="Applications" value={stats.applications} color="bg-blue-500" />
          <StatCard icon={CheckCircle} title="Shortlisted" value={stats.shortlisted} color="bg-green-500" />
          <StatCard icon={Clock} title="Interviews" value={stats.interviews} color="bg-yellow-500" />
          <StatCard icon={Briefcase} title="Offers" value={stats.offers} color="bg-purple-500" />
        </div>

        {/* Job Search */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs by company or position..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>

          <div className="grid gap-4">
            {filteredJobs.map((job) => (
              <div key={job.id} className="border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-8 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="flex justify-between items-start relative z-10">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black mb-2">{job.position}</h3>
                    <p className="text-xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-black">{job.company}</p>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{job.location}</span>
                      <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1" />{job.salary}</span>
                      <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1" />{job.type}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Posted {job.posted} • {job.applicants} applicants</p>
                  </div>
                  <button
                    onClick={() => handleApply(job)}
                    disabled={applications.some(app => app.jobId === job.id)}
                    className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 transform ${
                      applications.some(app => app.jobId === job.id)
                        ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed text-gray-500'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl hover:scale-110'
                    }`}
                  >
                    {applications.some(app => app.jobId === job.id) ? '✓ Applied' : 'Apply Now →'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Applications */}
        <div className="card">
          <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">My Applications</h2>
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Company</th>
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Position</th>
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Applied Date</th>
                  <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{app.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{app.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.appliedDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
