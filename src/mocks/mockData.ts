export interface InsuranceData {
  id: string;
  company: string;
  balances: string;
  additions: string;
  adjustments: string;
  deductions: string;
  investment: string;
  [key: string]: string;
}

const mockInsuranceData: InsuranceData[] = [
  {
    id: '1',
    company: 'AIG',
    balances: '123,456',
    additions: '234,567',
    adjustments: '345,678',
    deductions: '456,789',
    investment: '567,890',
  },
  {
    id: '2',
    company: 'Ayalon',
    balances: '210,987',
    additions: '321,098',
    adjustments: '432,109',
    deductions: '543,210',
    investment: '654,321',
  },
  {
    id: '3',
    company: 'Ashra',
    balances: '987,654',
    additions: '876,543',
    adjustments: '765,432',
    deductions: '654,321',
    investment: '543,210',
  },
  {
    id: '4',
    company: 'Blue Cross',
    balances: '876,543',
    additions: '765,432',
    adjustments: '654,321',
    deductions: '543,210',
    investment: '432,109',
  },
  {
    id: '5',
    company: 'Sun Life',
    balances: '765,432',
    additions: '654,321',
    adjustments: '543,210',
    deductions: '432,109',
    investment: '321,098',
  },
  {
    id: '6',
    company: 'MetLife',
    balances: '654,321',
    additions: '543,210',
    adjustments: '432,109',
    deductions: '321,098',
    investment: '210,987',
  },
  {
    id: '7',
    company: 'Allianz',
    balances: '543,210',
    additions: '432,109',
    adjustments: '321,098',
    deductions: '210,987',
    investment: '109,876',
  },
  {
    id: '8',
    company: 'AXA',
    balances: '432,109',
    additions: '321,098',
    adjustments: '210,987',
    deductions: '109,876',
    investment: '98,765',
  },
  {
    id: '9',
    company: 'Zurich',
    balances: '321,098',
    additions: '210,987',
    adjustments: '109,876',
    deductions: '98,765',
    investment: '87,654',
  },
  {
    id: '10',
    company: 'Prudential',
    balances: '210,987',
    additions: '109,876',
    adjustments: '98,765',
    deductions: '87,654',
    investment: '76,543',
  },
];

export default mockInsuranceData;
