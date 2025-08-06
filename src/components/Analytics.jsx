import React from "react";
import {
  LogOut,
  BarChart3,
  Home,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
} from "lucide-react";

const Analytics = ({ onLogout, navigate }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-white font-bold text-xl">
              xauron
              <div className="text-xs text-red-200 font-normal">
                powered by ALEA
              </div>
            </div>

            <div className="flex space-x-6">
              <button
                onClick={() => navigate("dashboard")}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Home size={20} />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => navigate("analytics")}
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <BarChart3 size={20} />
                <span>Analytics</span>
              </button>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
          <p className="text-gray-400">
            Detailed insights and performance metrics
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-400">
                Total Revenue
              </h3>
              <DollarSign className="text-green-400" size={20} />
            </div>
            <p className="text-2xl font-bold text-white">$125,430</p>
            <p className="text-green-400 text-sm">+15.3% vs last month</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-400">
                Active Users
              </h3>
              <Users className="text-blue-400" size={20} />
            </div>
            <p className="text-2xl font-bold text-white">8,492</p>
            <p className="text-blue-400 text-sm">+8.1% vs last month</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-400">
                Conversion Rate
              </h3>
              <TrendingUp className="text-red-400" size={20} />
            </div>
            <p className="text-2xl font-bold text-white">3.24%</p>
            <p className="text-red-400 text-sm">+0.5% vs last month</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-400">
                Avg. Session
              </h3>
              <Activity className="text-yellow-400" size={20} />
            </div>
            <p className="text-2xl font-bold text-white">4m 32s</p>
            <p className="text-red-400 text-sm">-2.1% vs last month</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Revenue Trend
            </h3>
            <div className="h-64 bg-slate-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Chart visualization would go here</p>
            </div>
          </div>

          {/* User Growth Chart */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              User Growth
            </h3>
            <div className="h-64 bg-slate-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Chart visualization would go here</p>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Traffic Sources
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-white">Organic Search</span>
              </div>
              <div className="text-right">
                <span className="text-white font-medium">45.2%</span>
                <span className="text-gray-400 text-sm block">
                  12,456 visits
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-white">Direct</span>
              </div>
              <div className="text-right">
                <span className="text-white font-medium">23.8%</span>
                <span className="text-gray-400 text-sm block">
                  6,542 visits
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white">Social Media</span>
              </div>
              <div className="text-right">
                <span className="text-white font-medium">18.7%</span>
                <span className="text-gray-400 text-sm block">
                  5,147 visits
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-white">Referral</span>
              </div>
              <div className="text-right">
                <span className="text-white font-medium">12.3%</span>
                <span className="text-gray-400 text-sm block">
                  3,389 visits
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
