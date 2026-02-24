import { useState } from 'react';
import { Briefcase, Users, UserCheck, TrendingUp } from 'lucide-react';
import StatCard from '../components/StatCard';
import { mockApplicants, mockStats } from '../data/mockData';
import toast from 'react-hot-toast';

const EmployerDashboard = () => {
  const [applicants, setApplicants] = useState(mockApplicants);
  const [showJobForm, setShowJobForm] = useState(false);
  const [jobForm, setJobForm] = useState({ position: '', location: '', salary: '', type: 'Full-time' });
  const stats = mockStats.employer;

  const handleStatusUpdate = (id, newStatus) => {
    setApplicants(applicants.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
    toast.success(`Applicant status updated to ${newStatus}`);
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    toast.success('Job posted successfully!');
    setShowJobForm(false);
    setJobForm({ position: '', location: '', salary: '', type: 'Full-time' });
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
        <div className="flex justify-between items-center mb-10 animate-fade-in">
          <div>
            <h1 className="text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">Employer Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl font-medium">Manage jobs and review applicants</p>
          </div>
          <button onClick={() => setShowJobForm(!showJobForm)} className="btn-primary text-lg">
            {showJobForm ? '✕ Cancel' : '➕ Post New Job'}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={Briefcase} title="Jobs Posted" value={stats.jobsPosted} color="bg-blue-500" />
          <StatCard icon={Users} title="Total Applicants" value={stats.totalApplicants} color="bg-purple-500" />
          <StatCard icon={UserCheck} title="Shortlisted" value={stats.shortlisted} color="bg-green-500" />
          <StatCard icon={TrendingUp} title="Hired" value={stats.hired} color="bg-yellow-500" />
        </div>

        {/* Post Job Form */}
        {showJobForm && (
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">Post New Job</h2>
            <form onSubmit={handlePostJob} className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Position</label>
                <input
                  type="text"
                  value={jobForm.position}
                  onChange={(e) => setJobForm({...jobForm, position: e.target.value})}
                  className="input-field"
                  placeholder="e.g. Software Engineer"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  value={jobForm.location}
                  onChange={(e) => setJobForm({...jobForm, location: e.target.value})}
                  className="input-field"
                  placeholder="e.g. Bangalore"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Salary Range</label>
                <input
                  type="text"
                  value={jobForm.salary}
                  onChange={(e) => setJobForm({...jobForm, salary: e.target.value})}
                  className="input-field"
                  placeholder="e.g. ₹10-15 LPA"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Job Type</label>
                <select
                  value={jobForm.type}
                  onChange={(e) => setJobForm({...jobForm, type: e.target.value})}
                  className="input-field"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="btn-primary w-full">Post Job</button>
              </div>
            </form>
          </div>
        )}

        {/* Applicants List */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-4">Recent Applicants</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">CGPA</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Skills</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {applicants.map((applicant) => (
                  <tr key={applicant.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{applicant.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{applicant.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{applicant.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{applicant.cgpa}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{applicant.skills}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(applicant.status)}`}>
                        {applicant.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleStatusUpdate(applicant.id, 'Shortlisted')}
                          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded transition-colors"
                        >
                          Shortlist
                        </button>
                        <button
                          onClick={() => handleStatusUpdate(applicant.id, 'Rejected')}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs rounded transition-colors"
                        >
                          Reject
                        </button>
                      </div>
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

export default EmployerDashboard;
