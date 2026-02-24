export const mockJobs = [
  { id: 1, company: 'Google', position: 'Software Engineer', location: 'Bangalore', salary: '₹18-25 LPA', type: 'Full-time', posted: '2 days ago', applicants: 45 },
  { id: 2, company: 'Microsoft', position: 'Cloud Developer', location: 'Hyderabad', salary: '₹15-22 LPA', type: 'Full-time', posted: '5 days ago', applicants: 32 },
  { id: 3, company: 'Amazon', position: 'Backend Developer', location: 'Mumbai', salary: '₹12-18 LPA', type: 'Full-time', posted: '1 week ago', applicants: 67 },
  { id: 4, company: 'Flipkart', position: 'Frontend Developer', location: 'Bangalore', salary: '₹10-15 LPA', type: 'Full-time', posted: '3 days ago', applicants: 28 },
  { id: 5, company: 'TCS', position: 'Full Stack Developer', location: 'Chennai', salary: '₹6-10 LPA', type: 'Full-time', posted: '1 day ago', applicants: 89 },
  { id: 6, company: 'Infosys', position: 'Data Analyst', location: 'Pune', salary: '₹5-8 LPA', type: 'Full-time', posted: '4 days ago', applicants: 54 },
];

export const mockApplications = [
  { id: 1, jobId: 1, company: 'Google', position: 'Software Engineer', status: 'Under Review', appliedDate: '2024-01-15' },
  { id: 2, jobId: 3, company: 'Amazon', position: 'Backend Developer', status: 'Shortlisted', appliedDate: '2024-01-10' },
  { id: 3, jobId: 5, company: 'TCS', position: 'Full Stack Developer', status: 'Rejected', appliedDate: '2024-01-05' },
];

export const mockApplicants = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@student.com', position: 'Software Engineer', status: 'Under Review', cgpa: 8.5, skills: 'React, Node.js' },
  { id: 2, name: 'Priya Patel', email: 'priya@student.com', position: 'Software Engineer', status: 'Shortlisted', cgpa: 9.2, skills: 'Python, Django' },
  { id: 3, name: 'Amit Kumar', email: 'amit@student.com', position: 'Software Engineer', status: 'Under Review', cgpa: 7.8, skills: 'Java, Spring' },
];

export const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@student.com', role: 'student', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@employer.com', role: 'employer', status: 'Active' },
  { id: 3, name: 'Mike Wilson', email: 'mike@officer.com', role: 'officer', status: 'Active' },
];

export const mockStats = {
  student: { applications: 12, shortlisted: 3, interviews: 2, offers: 1 },
  employer: { jobsPosted: 5, totalApplicants: 234, shortlisted: 45, hired: 12 },
  admin: { totalUsers: 1250, activeJobs: 89, companies: 45, placements: 567 },
  officer: { totalPlacements: 567, avgPackage: '8.5 LPA', topPackage: '25 LPA', placementRate: '85%' },
};

export const mockChartData = [
  { month: 'Jan', placements: 45 },
  { month: 'Feb', placements: 52 },
  { month: 'Mar', placements: 68 },
  { month: 'Apr', placements: 89 },
  { month: 'May', placements: 95 },
  { month: 'Jun', placements: 120 },
];

export const demoCredentials = {
  student: { email: 'student@demo.com', password: 'student123' },
  employer: { email: 'employer@demo.com', password: 'employer123' },
  admin: { email: 'admin@demo.com', password: 'admin123' },
  officer: { email: 'officer@demo.com', password: 'officer123' },
};
