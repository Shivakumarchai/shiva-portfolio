import React, { useState, useMemo } from 'react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Percent, 
  Filter, 
  RotateCcw, 
  Info,
  Calendar,
  Layers,
  MapPin,
  Sparkles
} from 'lucide-react';
import { RAW_DASHBOARD_DATA, SalesDataRecord } from '../data/portfolioData';

interface DashboardSectionProps {
  theme: 'dark' | 'light';
}

const CATEGORY_COLORS: Record<string, string> = {
  'Tech & Electronics': '#43E8FF',
  'Office Supplies': '#8B5CF6',
  'Furniture': '#34D399',
};

const REGION_COLORS: Record<string, string> = {
  'Asia Pacific': '#43E8FF',
  'North America': '#8B5CF6',
  'Europe': '#F59E0B',
};

export const DashboardSection: React.FC<DashboardSectionProps> = ({ theme }) => {
  // Filter States
  const [selectedQuarter, setSelectedQuarter] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  // Filtered dataset
  const filteredData = useMemo(() => {
    return RAW_DASHBOARD_DATA.filter((item) => {
      const matchQuarter = selectedQuarter === 'All' || item.quarter === selectedQuarter;
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchRegion = selectedRegion === 'All' || item.region === selectedRegion;
      return matchQuarter && matchCategory && matchRegion;
    });
  }, [selectedQuarter, selectedCategory, selectedRegion]);

  // Aggregate KPIs
  const kpis = useMemo(() => {
    const totalRevenue = filteredData.reduce((acc, curr) => acc + curr.sales, 0);
    const totalProfit = filteredData.reduce((acc, curr) => acc + curr.profit, 0);
    const totalOrders = filteredData.reduce((acc, curr) => acc + curr.orders, 0);
    const profitMargin = totalRevenue > 0 ? ((totalProfit / totalRevenue) * 100).toFixed(1) : '0';
    const avgOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(0) : '0';

    return {
      revenue: totalRevenue,
      profit: totalProfit,
      orders: totalOrders,
      margin: profitMargin,
      aov: avgOrderValue,
    };
  }, [filteredData]);

  // Monthly Trend Chart Data
  const monthlyTrendData = useMemo(() => {
    const months = ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026'];
    return months
      .map((m) => {
        const records = filteredData.filter((d) => d.month === m);
        const sales = records.reduce((acc, curr) => acc + curr.sales, 0);
        const profit = records.reduce((acc, curr) => acc + curr.profit, 0);
        const orders = records.reduce((acc, curr) => acc + curr.orders, 0);
        return {
          month: m.replace(' 2026', ''),
          sales,
          profit,
          orders,
        };
      })
      .filter((d) => d.sales > 0 || selectedQuarter === 'All');
  }, [filteredData, selectedQuarter]);

  // Revenue Distribution Donut Data
  const donutData = useMemo(() => {
    const catMap: Record<string, number> = {};
    filteredData.forEach((d) => {
      catMap[d.category] = (catMap[d.category] || 0) + d.sales;
    });
    return Object.entries(catMap).map(([name, value]) => ({
      name,
      value,
    }));
  }, [filteredData]);

  // Regional Comparison Bar Chart Data
  const regionalData = useMemo(() => {
    const regMap: Record<string, { region: string; sales: number; profit: number }> = {};
    filteredData.forEach((d) => {
      if (!regMap[d.region]) {
        regMap[d.region] = { region: d.region, sales: 0, profit: 0 };
      }
      regMap[d.region].sales += d.sales;
      regMap[d.region].profit += d.profit;
    });
    return Object.values(regMap);
  }, [filteredData]);

  const resetFilters = () => {
    setSelectedQuarter('All');
    setSelectedCategory('All');
    setSelectedRegion('All');
  };

  // Custom Chart Tooltip styling
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 rounded-xl bg-[#080B16] border border-slate-700 shadow-xl text-xs font-mono space-y-1">
          <div className="font-bold text-white mb-1">{label}</div>
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center gap-2" style={{ color: entry.color }}>
              <span>{entry.name}:</span>
              <span className="font-bold text-white">
                {entry.name.toLowerCase().includes('order')
                  ? entry.value.toLocaleString()
                  : `$${entry.value.toLocaleString()}`}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="dashboard" className="py-24 relative bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#43E8FF] font-semibold mb-2">
              <span>05 / INTERACTIVE ANALYTICS ENGINE</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Data in Motion
            </h2>
            <p className={`mt-3 text-base max-w-2xl ${theme === 'dark' ? 'text-[#9BA7C4]' : 'text-slate-600'}`}>
              Live multidimensional analytics dashboard demonstrating real-time data filtering, dynamic chart rendering, and automated business intelligence calculations.
            </p>
          </div>

          {/* Mandatory Demo Label as required by user prompt */}
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3.5 py-2 rounded-xl">
            <Info className="w-4 h-4 shrink-0 text-amber-400" />
            <span>Illustrative demo data — not live business data.</span>
          </div>
        </div>

        {/* Dynamic Filter Controls Bar */}
        <div className={`p-5 rounded-2xl glass-panel mb-8 border transition-all ${
          theme === 'dark' ? 'bg-[#11182D]/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Date Filter */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <Calendar className="w-4 h-4 text-[#43E8FF]" />
                <span className="text-[#9BA7C4]">Period:</span>
                <div className="flex items-center bg-[#080B16] rounded-lg p-1 border border-slate-800">
                  {['All', 'Q1', 'Q2'].map((q) => (
                    <button
                      key={q}
                      onClick={() => setSelectedQuarter(q)}
                      className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                        selectedQuarter === q
                          ? 'bg-[#43E8FF] text-black font-bold'
                          : 'text-[#9BA7C4] hover:text-white'
                      }`}
                    >
                      {q === 'All' ? 'All 2026' : `${q} 2026`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Category Filter */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <Layers className="w-4 h-4 text-[#8B5CF6]" />
                <span className="text-[#9BA7C4]">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-[#43E8FF] ${
                    theme === 'dark'
                      ? 'bg-[#080B16] border-slate-800 text-white'
                      : 'bg-slate-50 border-slate-300 text-slate-800'
                  }`}
                >
                  <option value="All">All Categories</option>
                  <option value="Tech & Electronics">Tech & Electronics</option>
                  <option value="Office Supplies">Office Supplies</option>
                  <option value="Furniture">Furniture</option>
                </select>
              </div>

              {/* Regional Filter */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-[#9BA7C4]">Region:</span>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-[#43E8FF] ${
                    theme === 'dark'
                      ? 'bg-[#080B16] border-slate-800 text-white'
                      : 'bg-slate-50 border-slate-300 text-slate-800'
                  }`}
                >
                  <option value="All">All Regions</option>
                  <option value="Asia Pacific">Asia Pacific</option>
                  <option value="North America">North America</option>
                  <option value="Europe">Europe</option>
                </select>
              </div>

            </div>

            {/* Reset Filters */}
            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 text-xs font-mono text-[#9BA7C4] hover:text-[#43E8FF] px-3 py-1.5 rounded-lg border border-slate-800 hover:border-[#43E8FF]/30 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>

          </div>
        </div>

        {/* KPI Scorecards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          
          {/* Total Revenue */}
          <div className={`p-5 rounded-2xl glass-panel border transition-all ${
            theme === 'dark' ? 'bg-[#11182D]/85 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between text-xs font-mono text-[#9BA7C4] mb-2">
              <span>TOTAL REVENUE</span>
              <DollarSign className="w-4 h-4 text-[#43E8FF]" />
            </div>
            <div className={`text-2xl sm:text-3xl font-extrabold font-mono ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              ${kpis.revenue.toLocaleString()}
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-2 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>Dynamic sum based on filters</span>
            </div>
          </div>

          {/* Total Orders */}
          <div className={`p-5 rounded-2xl glass-panel border transition-all ${
            theme === 'dark' ? 'bg-[#11182D]/85 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between text-xs font-mono text-[#9BA7C4] mb-2">
              <span>TOTAL VOLUME / ORDERS</span>
              <ShoppingBag className="w-4 h-4 text-[#8B5CF6]" />
            </div>
            <div className={`text-2xl sm:text-3xl font-extrabold font-mono ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {kpis.orders.toLocaleString()}
            </div>
            <div className="text-[11px] font-mono text-[#43E8FF] mt-2 flex items-center gap-1">
              <span>Completed Transactions</span>
            </div>
          </div>

          {/* Avg Order Value */}
          <div className={`p-5 rounded-2xl glass-panel border transition-all ${
            theme === 'dark' ? 'bg-[#11182D]/85 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between text-xs font-mono text-[#9BA7C4] mb-2">
              <span>AVG ORDER VALUE (AOV)</span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <div className={`text-2xl sm:text-3xl font-extrabold font-mono ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              ${Number(kpis.aov).toLocaleString()}
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-2">
              <span>Revenue / Total Orders</span>
            </div>
          </div>

          {/* Profit Margin */}
          <div className={`p-5 rounded-2xl glass-panel border transition-all ${
            theme === 'dark' ? 'bg-[#11182D]/85 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between text-xs font-mono text-[#9BA7C4] mb-2">
              <span>NET PROFIT MARGIN</span>
              <Percent className="w-4 h-4 text-amber-400" />
            </div>
            <div className={`text-2xl sm:text-3xl font-extrabold font-mono ${
              Number(kpis.margin) > 20 ? 'text-emerald-400' : 'text-amber-400'
            }`}>
              {kpis.margin}%
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-2">
              <span>Net Profit: ${kpis.profit.toLocaleString()}</span>
            </div>
          </div>

        </div>

        {/* Charts Grid: Line Chart & Donut Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Sales Trend Line/Area Chart */}
          <div className={`lg:col-span-8 p-6 rounded-2xl glass-panel border ${
            theme === 'dark' ? 'bg-[#11182D]/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Monthly Revenue & Profit Progression
                </h3>
                <p className="text-xs font-mono text-[#9BA7C4] mt-0.5">
                  Filtered time-series aggregation (Jan – Jun 2026)
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-[#43E8FF]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#43E8FF]" /> Revenue
                </span>
                <span className="flex items-center gap-1.5 text-[#8B5CF6]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" /> Profit
                </span>
              </div>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#43E8FF" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#43E8FF" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#1E293B' : '#E2E8F0'} />
                  <XAxis 
                    dataKey="month" 
                    stroke="#94A3B8" 
                    fontSize={11} 
                    fontFamily="monospace"
                  />
                  <YAxis 
                    stroke="#94A3B8" 
                    fontSize={11} 
                    fontFamily="monospace"
                    tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="sales" 
                    name="Revenue" 
                    stroke="#43E8FF" 
                    strokeWidth={2.5} 
                    fillOpacity={1} 
                    fill="url(#salesGrad)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="profit" 
                    name="Profit" 
                    stroke="#8B5CF6" 
                    strokeWidth={2} 
                    fillOpacity={1} 
                    fill="url(#profitGrad)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Distribution Donut Chart */}
          <div className={`lg:col-span-4 p-6 rounded-2xl glass-panel border flex flex-col justify-between ${
            theme === 'dark' ? 'bg-[#11182D]/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div>
              <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Revenue by Category
              </h3>
              <p className="text-xs font-mono text-[#9BA7C4] mt-0.5">
                Proportion of merchandise volume
              </p>
            </div>

            <div className="h-56 w-full my-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {donutData.map((entry) => (
                      <Cell 
                        key={entry.name} 
                        fill={CATEGORY_COLORS[entry.name] || '#43E8FF'} 
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Donut Legend */}
            <div className="space-y-2 pt-2 border-t border-slate-800/40 text-xs font-mono">
              {donutData.map((item) => {
                const percentage = kpis.revenue > 0 ? ((item.value / kpis.revenue) * 100).toFixed(1) : '0';
                return (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: CATEGORY_COLORS[item.name] || '#43E8FF' }} 
                      />
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                        {item.name}
                      </span>
                    </div>
                    <span className="text-white font-bold">{percentage}%</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Regional Performance Bar Chart */}
        <div className={`p-6 rounded-2xl glass-panel border ${
          theme === 'dark' ? 'bg-[#11182D]/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Regional Comparison: Revenue vs. Net Profit
              </h3>
              <p className="text-xs font-mono text-[#9BA7C4] mt-0.5">
                Multi-region profitability performance across selected parameters
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-[#43E8FF]">
                <span className="w-2.5 h-2.5 rounded bg-[#43E8FF]" /> Total Sales
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded bg-emerald-400" /> Net Profit
              </span>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionalData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#1E293B' : '#E2E8F0'} />
                <XAxis 
                  dataKey="region" 
                  stroke="#94A3B8" 
                  fontSize={11} 
                  fontFamily="monospace"
                />
                <YAxis 
                  stroke="#94A3B8" 
                  fontSize={11} 
                  fontFamily="monospace"
                  tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="sales" name="Sales" fill="#43E8FF" radius={[6, 6, 0, 0]} />
                <Bar dataKey="profit" name="Profit" fill="#34D399" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
};
