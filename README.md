# Tourism Management App

A comprehensive tourism management application built with Next.js, Supabase, and Tailwind CSS.

## Features

- **Dashboard**: Overview of revenue, tours, bookings, and customers
- **Tour Management**: Create, edit, and manage tour packages
- **Booking System**: Complete booking flow with payment processing
- **Customer Management**: Track customer information and booking history
- **Search & Filters**: Advanced search and filtering for tours
- **Authentication**: User registration and login system
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Download the project** from v0 or clone this repository

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**:
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`
   
   Fill in your Supabase credentials in `.env.local`:
   \`\`\`
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   \`\`\`

4. **Set up the database**:
   - Go to your Supabase dashboard
   - Run the SQL scripts from the project to create tables and seed data

5. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
tourism-management-app/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Dashboard page
│   ├── tours/             # Tour management pages
│   ├── bookings/          # Booking management pages
│   ├── customers/         # Customer management pages
│   ├── customer-view/     # Customer-facing pages
│   └── auth/              # Authentication pages
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── auth/             # Authentication components
│   └── ...               # Other components
├── lib/                  # Utility functions and configurations
│   ├── supabase.ts       # Supabase client
│   ├── auth.ts           # Authentication functions
│   └── ...               # Other utilities
├── public/               # Static assets
│   └── images/           # Tour images
└── ...                   # Configuration files
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Database Schema

The app uses the following main tables:

- **tours**: Tour packages with details, pricing, and scheduling
- **customers**: Customer information and contact details
- **bookings**: Booking records linking customers to tours

## Features Overview

### Admin Dashboard
- Revenue analytics and metrics
- Recent bookings overview
- Tour and customer statistics

### Tour Management
- Create and edit tour packages
- Manage tour schedules and pricing
- Upload tour images and descriptions

### Booking System
- Multi-step booking process
- Customer information collection
- Payment processing simulation
- Booking confirmation

### Customer Portal
- Browse available tours
- Search and filter functionality
- Detailed tour information
- Booking interface

### Authentication
- User registration and login
- Role-based access (admin/customer)
- Session management

## Technologies Used

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email info@tourmanager.com or create an issue in the repository.
