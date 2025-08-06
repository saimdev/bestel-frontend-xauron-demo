import React, { useState, useEffect } from "react";
import {
  LogOut,
  BarChart3,
  Home,
  Shield,
  Settings,
  AlertTriangle,
  Eye,
  Cpu,
  MessageSquare,
  Search,
  Bell,
  User,
  ChevronRight,
  Wifi,
  Router,
  Users,
  Activity,
  Server,
  Signal,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = ({ onLogout, navigate }) => {
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("home-insight");
  const [networkView, setNetworkView] = useState("realtime"); // 'realtime' or 'historical'
  const [realtimeData, setRealtimeData] = useState([]);
  const [historicalData, setHistoricalData] = useState([]);

  const menuItems = [
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "alarm-monitor", label: "Alarm Monitor", icon: AlertTriangle },
    { id: "security-management", label: "Security", icon: Shield },
    { id: "system-settings", label: "System Settings", icon: Settings },
    { id: "home-insight", label: "Home Insight", icon: Eye },
    { id: "aleafelix", label: "AleaFelix", icon: Cpu },
    { id: "aleanms", label: "AleaNMS", icon: MessageSquare },
    { id: "alea-detectpro", label: "Alea DetectPro", icon: Search },
  ];

  // Generate initial historical data
  useEffect(() => {
    const generateHistoricalData = () => {
      const data = [];
      const now = new Date();
      for (let i = 23; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60 * 60 * 1000);
        data.push({
          time: time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          bandwidth: Math.floor(Math.random() * 40) + 60,
          users: Math.floor(Math.random() * 200) + 800,
          latency: Math.floor(Math.random() * 20) + 10,
          throughput: Math.floor(Math.random() * 30) + 70,
        });
      }
      return data;
    };

    setHistoricalData(generateHistoricalData());

    // Initialize realtime data with last few points
    const initialRealtime = [];
    const now = new Date();
    for (let i = 9; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 5000);
      initialRealtime.push({
        time: time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        bandwidth: Math.floor(Math.random() * 20) + 80,
        users: Math.floor(Math.random() * 50) + 950,
        latency: Math.floor(Math.random() * 10) + 15,
        throughput: Math.floor(Math.random() * 15) + 85,
      });
    }
    setRealtimeData(initialRealtime);
  }, []);

  // Real-time data updates
  useEffect(() => {
    if (networkView !== "realtime") return;

    const interval = setInterval(() => {
      const now = new Date();
      const newDataPoint = {
        time: now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        bandwidth: Math.floor(Math.random() * 20) + 80,
        users: Math.floor(Math.random() * 50) + 950,
        latency: Math.floor(Math.random() * 10) + 15,
        throughput: Math.floor(Math.random() * 15) + 85,
      };

      setRealtimeData((prev) => {
        const updated = [...prev, newDataPoint];
        return updated.slice(-10); // Keep only last 10 points
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, [networkView]);

  const renderAnalyticsContent = () => {
    // Generate sample data for different charts
    const deviceTypeData = [
      { name: "Gateway", value: 50, count: 3, color: "#ef4444" },
      { name: "Manageable AP", value: 30, count: 2, color: "#3b82f6" },
      { name: "3rd-party AP", value: 20, count: 1, color: "#10b981" },
    ];

    const bandwidthData = historicalData.map((item) => ({
      ...item,
      utilization: Math.floor(Math.random() * 30) + 70,
      peak: Math.floor(Math.random() * 20) + 90,
    }));

    const coverageData = [
      { zone: "Zone A", coverage: 95, devices: 45, signal: "Excellent" },
      { zone: "Zone B", coverage: 78, devices: 32, signal: "Good" },
      { zone: "Zone C", coverage: 89, devices: 28, signal: "Good" },
      { zone: "Zone D", coverage: 92, devices: 41, signal: "Excellent" },
      { zone: "Zone E", coverage: 65, devices: 18, signal: "Fair" },
    ];

    const issueData = [
      //   { type: "Major", count: 2, color: "#ef4444" },
      //   { type: "Minor", count: 5, color: "#f59e0b" },
      { type: "Auto Resolved", count: 12, color: "#10b981" },
      { type: "Remotely Resolved", count: 8, color: "#3b82f6" },
      { type: "Unresolved", count: 3, color: "#6b7280" },
    ];

    const performanceData = historicalData.map((item, index) => ({
      time: item.time,
      cpuUsage: Math.floor(Math.random() * 30) + 40,
      memoryUsage: Math.floor(Math.random() * 25) + 50,
      diskUsage: Math.floor(Math.random() * 20) + 30,
      temperature: Math.floor(Math.random() * 15) + 45,
    }));

    return (
      <div className="space-y-6">
        {/* Analytics Header */}
        <div className="bg-gradient-to-r from-red-500 to-blue-500 rounded-xl p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Network Analytics</h1>
          <p className="text-red-100">
            Comprehensive insights into your network performance and
            infrastructure
          </p>
        </div>

        {/* Key Metrics Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600">6</div>
            <div className="text-sm text-gray-600">Total Subscribers</div>
            <div className="text-xs text-green-600 mt-1">+2 this month</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-green-600">6</div>
            <div className="text-sm text-gray-600">Online</div>
            <div className="text-xs text-blue-600 mt-1">100% uptime</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-gray-600">0</div>
            <div className="text-sm text-gray-600">Offline</div>
            <div className="text-xs text-green-600 mt-1">Excellent!</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-red-600">6</div>
            <div className="text-sm text-gray-600">Total APs</div>
            <div className="text-xs text-blue-600 mt-1">All active</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <div className="text-2xl font-bold text-purple-600">50%</div>
            <div className="text-sm text-gray-600">Gateway+ Manageable</div>
            <div className="text-xs text-gray-500 mt-1">Primary type</div>
          </div>
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Device Type Distribution */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Device Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={deviceTypeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {deviceTypeData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-3 h-3 rounded-full`}
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                  <span className="font-medium">{item.count} devices</span>
                </div>
              ))}
            </div>
          </div>

          {/* Issue Status */}
          {/* Issue Status */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Issue Status
            </h3>

            {/* Issue Cards */}
            <div className="space-y-3 mb-4">
              {issueData.map((issue, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: issue.color }}
                    ></div>
                    <span className="text-sm font-medium text-gray-700">
                      {issue.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-800">
                      {issue.count}
                    </span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${(issue.count / 12) * 100}%`,
                          backgroundColor: issue.color,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">20</div>
                <div className="text-sm text-gray-600">Total Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">7</div>
                <div className="text-sm text-gray-600">Needs Attention</div>
              </div>
            </div>

            {/* Progress Ring */}
            <div className="mt-4 flex justify-center">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="#e5e7eb"
                    strokeWidth="6"
                    fill="transparent"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="#10b981"
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={`${(20 / 30) * 201} 201`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-800">74%</span>
                </div>
              </div>
            </div>
            <div className="text-center text-xs text-gray-500 mt-2">
              Resolution Rate
            </div>
          </div>

          {/* Coverage Assessment */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Coverage by Zone
            </h3>
            <div className="space-y-3">
              {coverageData.map((zone, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{zone.zone}</span>
                    <span className="text-gray-600">{zone.coverage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        zone.coverage >= 90
                          ? "bg-green-500"
                          : zone.coverage >= 75
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${zone.coverage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{zone.devices} devices</span>
                    <span
                      className={`font-medium ${
                        zone.signal === "Excellent"
                          ? "text-green-600"
                          : zone.signal === "Good"
                          ? "text-blue-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {zone.signal}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bandwidth Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Bandwidth Utilization
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={bandwidthData}>
                <defs>
                  <linearGradient
                    id="utilizationGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="peakGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="utilization"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#utilizationGradient)"
                  name="Current Usage (%)"
                />
                <Area
                  type="monotone"
                  dataKey="peak"
                  stroke="#ef4444"
                  fillOpacity={1}
                  fill="url(#peakGradient)"
                  name="Peak Usage (%)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* System Performance */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              System Performance
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="cpuUsage"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="CPU Usage (%)"
                />
                <Line
                  type="monotone"
                  dataKey="memoryUsage"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Memory Usage (%)"
                />
                <Line
                  type="monotone"
                  dataKey="diskUsage"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Disk Usage (%)"
                />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  name="Temperature (°C)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Service Bearing Capability */}
        {/* Service Bearing Capability */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Service Bearing Capability Assessment
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Main Capability Gauge */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Overall Network Health
                  </h4>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Good
                  </span>
                </div>

                {/* Large Central Gauge */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48">
                    <svg className="w-48 h-48 transform -rotate-90">
                      {/* Background circle */}
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        stroke="#e5e7eb"
                        strokeWidth="12"
                        fill="transparent"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        stroke="url(#gaugeGradient)"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={`${66.67 * 5.03} 503`}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient
                          id="gaugeGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-gray-800">
                        66.67%
                      </span>
                      <span className="text-sm text-gray-600">
                        Network Ready
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metric Cards Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">4</div>
                    <div className="text-xs text-gray-600">Healthy Zones</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">1</div>
                    <div className="text-xs text-gray-600">Warning Zones</div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">0</div>
                    <div className="text-xs text-gray-600">Critical Zones</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Issue Breakdown */}
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-gray-800">
                Performance Issues
              </h4>

              {/* SD Not Ready */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-800">
                    SD Not Ready
                  </span>
                  <span className="text-lg font-bold text-green-700">
                    66.67%
                  </span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "66.67%" }}
                  ></div>
                </div>
                <p className="text-xs text-green-700">
                  Root cause: Packet loss4%
                </p>
              </div>

              {/* Poor Coverage */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">
                    Poor Coverage
                  </span>
                  <span className="text-lg font-bold text-gray-700">0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-gray-400 h-2 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600">
                  Coverage and roaming issues
                </p>
              </div>

              {/* Bandwidth Bottleneck */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">
                    Bandwidth Issues
                  </span>
                  <span className="text-lg font-bold text-gray-700">0%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-gray-400 h-2 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600">100 Mbit/s subscribers</p>
              </div>

              {/* Action Items */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mt-6">
                <h5 className="text-sm font-semibold text-blue-800 mb-3">
                  Recommended Actions
                </h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-blue-700">
                      Monitor packet loss in Zone E
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-blue-700">
                      Schedule maintenance check
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-blue-700">
                      Optimize bandwidth allocation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white shadow-xl border-r border-gray-200 transition-all duration-200 z-50 overflow-hidden ${
          sidebarHovered ? "w-64" : "w-16"
        }`}
        onMouseEnter={() => setSidebarHovered(true)}
        onMouseLeave={() => setSidebarHovered(false)}
      >
        {/* Logo Section */}
        <div className="p-4 border-b border-gray-200 h-20 flex items-center">
          <div className="flex items-center w-full">
            <img
              src="https://aleashop.es/img/cms/Logo%20xauron.png"
              alt="Xauron Logo"
              className="w-8 h-8 object-contain flex-shrink-0"
            />
            <div
              className={`ml-3 transition-all duration-200 ${
                sidebarHovered
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              <div className="text-gray-800 font-bold text-lg whitespace-nowrap">
                xauron
              </div>
              <div className="text-xs text-gray-500 font-normal whitespace-nowrap">
                powered by ALEA
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="mt-4 px-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeMenuItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveMenuItem(item.id)}
                className={`w-full flex items-center px-3 py-3 mb-1 rounded-xl transition-all duration-200 group overflow-hidden ${
                  isActive
                    ? "bg-gradient-to-r from-red-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                <IconComponent size={20} className="flex-shrink-0" />
                <span
                  className={`ml-3 font-medium whitespace-nowrap transition-all duration-200 ${
                    sidebarHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  {item.label}
                </span>
                <ChevronRight
                  size={16}
                  className={`ml-auto flex-shrink-0 transition-all duration-200 ${
                    sidebarHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  } ${isActive ? "rotate-90" : "group-hover:translate-x-1"}`}
                />
              </button>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-4 left-2 right-2">
          <button
            onClick={onLogout}
            className="w-full flex items-center px-3 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 overflow-hidden"
          >
            <LogOut size={20} className="flex-shrink-0" />
            <span
              className={`ml-3 font-medium whitespace-nowrap transition-all duration-200 ${
                sidebarHovered
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarHovered ? "ml-64" : "ml-16"
        }`}
      >
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                WiFi Network Dashboard
              </h1>
              <p className="text-gray-600">
                Monitor and manage your network infrastructure
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} />
              </button>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                <User size={18} className="text-gray-600" />
                <span className="text-gray-700 font-medium">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activeMenuItem === "analytics" ? (
            renderAnalyticsContent()
          ) : (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Wifi className="text-blue-600" size={24} />
                    </div>
                    <span className="text-sm text-green-600 font-medium">
                      +12%
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    2,847
                  </h3>
                  <p className="text-gray-600 text-sm">Active Connections</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Router className="text-red-600" size={24} />
                    </div>
                    <span className="text-sm text-green-600 font-medium">
                      +5%
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">156</h3>
                  <p className="text-gray-600 text-sm">Access Points</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Users className="text-yellow-600" size={24} />
                    </div>
                    <span className="text-sm text-blue-600 font-medium">
                      +8%
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    12.4K
                  </h3>
                  <p className="text-gray-600 text-sm">Total Users</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Activity className="text-green-600" size={24} />
                    </div>
                    <span className="text-sm text-red-600 font-medium">
                      -2%
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    99.2%
                  </h3>
                  <p className="text-gray-600 text-sm">Network Uptime</p>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Network Status */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Network Overview
                    </h2>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setNetworkView("realtime")}
                        className={`px-3 py-1 text-sm rounded-lg font-medium transition-colors ${
                          networkView === "realtime"
                            ? "bg-blue-100 text-blue-600"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        Real-time
                      </button>
                      <button
                        onClick={() => setNetworkView("historical")}
                        className={`px-3 py-1 text-sm rounded-lg font-medium transition-colors ${
                          networkView === "historical"
                            ? "bg-blue-100 text-blue-600"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        Historical
                      </button>
                    </div>
                  </div>

                  {/* Chart Container */}
                  <div className="h-80">
                    {networkView === "realtime" ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={realtimeData}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#f0f0f0"
                          />
                          <XAxis
                            dataKey="time"
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                            tickLine={{ stroke: "#e5e7eb" }}
                          />
                          <YAxis
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                            tickLine={{ stroke: "#e5e7eb" }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#fff",
                              border: "1px solid #e5e7eb",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="bandwidth"
                            stroke="#ef4444"
                            strokeWidth={2}
                            dot={{ fill: "#ef4444", strokeWidth: 2, r: 3 }}
                            activeDot={{
                              r: 5,
                              stroke: "#ef4444",
                              strokeWidth: 2,
                            }}
                            name="Bandwidth (Mbps)"
                          />
                          <Line
                            type="monotone"
                            dataKey="latency"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={{ fill: "#3b82f6", strokeWidth: 2, r: 3 }}
                            activeDot={{
                              r: 5,
                              stroke: "#3b82f6",
                              strokeWidth: 2,
                            }}
                            name="Latency (ms)"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    ) : (
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={historicalData}>
                          <defs>
                            <linearGradient
                              id="bandwidthGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#ef4444"
                                stopOpacity={0.3}
                              />
                              <stop
                                offset="95%"
                                stopColor="#ef4444"
                                stopOpacity={0.05}
                              />
                            </linearGradient>
                            <linearGradient
                              id="usersGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#3b82f6"
                                stopOpacity={0.3}
                              />
                              <stop
                                offset="95%"
                                stopColor="#3b82f6"
                                stopOpacity={0.05}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#f0f0f0"
                          />
                          <XAxis
                            dataKey="time"
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                            tickLine={{ stroke: "#e5e7eb" }}
                          />
                          <YAxis
                            tick={{ fontSize: 12, fill: "#6b7280" }}
                            tickLine={{ stroke: "#e5e7eb" }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#fff",
                              border: "1px solid #e5e7eb",
                              borderRadius: "8px",
                              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="bandwidth"
                            stroke="#ef4444"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#bandwidthGradient)"
                            name="Bandwidth (Mbps)"
                          />
                          <Area
                            type="monotone"
                            dataKey="throughput"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#usersGradient)"
                            name="Throughput (%)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    )}
                  </div>

                  {/* Chart Legend */}
                  <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-100">
                    {networkView === "realtime" ? (
                      <>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            Bandwidth (Mbps)
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            Latency (ms)
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            Bandwidth (Mbps)
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            Throughput (%)
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Active Alerts */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Active Alerts
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <AlertTriangle
                        size={16}
                        className="text-red-500 mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <p className="text-sm font-medium text-red-800">
                          High CPU Usage
                        </p>
                        <p className="text-xs text-red-600">Router AP-001</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <AlertTriangle
                        size={16}
                        className="text-yellow-500 mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <p className="text-sm font-medium text-yellow-800">
                          Low Signal
                        </p>
                        <p className="text-xs text-yellow-600">
                          Zone B Coverage
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <Server
                        size={16}
                        className="text-blue-500 mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <p className="text-sm font-medium text-blue-800">
                          Maintenance
                        </p>
                        <p className="text-xs text-blue-600">
                          Scheduled Update
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Recent Network Events
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left text-sm font-medium text-gray-600 pb-3">
                          Time
                        </th>
                        <th className="text-left text-sm font-medium text-gray-600 pb-3">
                          Event
                        </th>
                        <th className="text-left text-sm font-medium text-gray-600 pb-3">
                          Device
                        </th>
                        <th className="text-left text-sm font-medium text-gray-600 pb-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-3 text-sm text-gray-500">14:32</td>
                        <td className="py-3 text-sm text-gray-800">
                          New device connected
                        </td>
                        <td className="py-3 text-sm text-gray-600">
                          iPhone-12
                        </td>
                        <td className="py-3">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
                            Connected
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm text-gray-500">14:28</td>
                        <td className="py-3 text-sm text-gray-800">
                          Bandwidth threshold exceeded
                        </td>
                        <td className="py-3 text-sm text-gray-600">AP-003</td>
                        <td className="py-3">
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-600 rounded-full">
                            Warning
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 text-sm text-gray-500">14:15</td>
                        <td className="py-3 text-sm text-gray-800">
                          Firmware update completed
                        </td>
                        <td className="py-3 text-sm text-gray-600">
                          Router-Main
                        </td>
                        <td className="py-3">
                          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                            Success
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
