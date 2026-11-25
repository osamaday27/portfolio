import type { SkillGroup } from '~/types'
const g = (key: string, names: string[]): SkillGroup => ({ key, skills: names.map(name => ({ name })) })
// Add `level: 'core' | 'working' | 'fundamentals'` to a skill once verified; badges then show it.
export const skillGroups: SkillGroup[] = [
  g('dev', ['PHP','Laravel','Livewire','JavaScript','Vue.js','Nuxt.js','React.js','Next.js','Node.js','NestJS','RESTful APIs','HTML5','CSS3']),
  g('design', ['Object-Oriented Programming','MVC Architecture','SOLID Principles','Clean Code','Design Patterns','System Design','Software Architecture','Database Design','API Architecture','Business Logic','Requirements Analysis','Application Scalability']),
  g('network', ['Networking Fundamentals','TCP/IP','DNS','DHCP','LAN / WAN','Routing & Switching','Cisco CCNA Fundamentals','Windows Server Fundamentals','Active Directory','Group Policy','Linux Fundamentals','Network Troubleshooting']),
  g('security', ['Security Fundamentals','Application Security','OWASP Top 10','Authentication','Authorization','Password Security','SQL Injection Prevention','XSS Prevention','CSRF Protection','Network Security Fundamentals','Firewall Fundamentals','SOC Fundamentals','Security Log Analysis']),
  g('cloud', ['AWS Fundamentals','AWS EC2','AWS S3','AWS RDS','Cloud Architecture Fundamentals','Hosting','DNS Configuration','SSL / HTTPS','Vercel','Environment Variables','Application Deployment','GitHub']),
  g('database', ['MySQL','Relational Databases','ERD','Database Relationships','Normalization','SQL Queries','Indexing Fundamentals','Query Optimization','Migrations','Database Architecture']),
  g('pm', ['Agile Methodology','Scrum Fundamentals','Sprint Planning','Sprint Reviews','Backlog Management','Task Estimation','Jira','Project Coordination','Requirements Documentation','Team Collaboration']),
  g('tools', ['Git','GitHub','Postman','VS Code','Jira','Linux CLI','CMD','PowerShell','AI Development Tools'])
]
