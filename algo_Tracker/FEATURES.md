# 🚀 DSA Tracker - Enhanced Version

A beautiful, feature-rich DSA problem tracking application with role-based access, admin controls, and an enhanced UI.

## ✨ New Features

### 1. **Authentication System** 🔐
- **Login Page** with role-based selection
- Two user roles: **Admin** and **Student (User)**
- Persistent login using localStorage
- Clean logout functionality

### 2. **Role-Based Access** 👥

#### **Student/User Dashboard**
- View all DSA problems
- Mark problems as solved/unsolved
- Bookmark favorite problems
- Filter by:
  - Difficulty level (Easy, Medium, Hard)
  - Topic (Array, Tree, Graph, etc.)
  - Solved Status
- Search functionality
- Real-time statistics and progress tracking
- Completion percentage
- Animated, responsive UI

#### **Admin Panel** 🛠️
- **Add New Questions** with the following details:
  - Problem title
  - Topic selection
  - Difficulty level
  - Platform (LeetCode, GeeksforGeeks, HackerRank, CodeChef)
  - Problem link
- View all questions in a table
- Dashboard statistics showing:
  - Total questions count
  - Breakdown by difficulty
  - Visual cards with emojis

### 3. **Enhanced UI/UX** 🎨

#### Visual Improvements
- **Dark Theme** with gradient backgrounds
- **Glass Morphism** effects for modern look
- **Animated Elements**:
  - Smooth fade-in animations
  - Hover scale effects
  - Floating animations
  - Glow effects
  - Smooth transitions

#### Navigation
- **Sticky Navigation Bar** showing:
  - App logo and title
  - Current user info and role
  - Logout button
- **Responsive Design** for all screen sizes

#### Styling Features
- Custom scrollbar with gradient
- Smooth animations on load
- Gradient text and buttons
- Focus ring styles for accessibility
- Hover effects on all interactive elements

### 4. **Data Persistence**
- Questions saved to localStorage
- User session saved to localStorage
- Automatic sync when data changes
- Preserves user progress across sessions

## 📊 Key Components

### New Components Created:

1. **`AuthContext.jsx`** - Authentication context and hooks
   - User state management
   - Login/logout functions
   - localStorage persistence

2. **`Login.jsx`** - Login page
   - Username input
   - Role selection (Admin/Student)
   - Error handling
   - Beautiful animated UI

3. **`Navbar.jsx`** - Navigation bar
   - User info display
   - Role badge
   - Logout button
   - Sticky positioning

4. **`AdminPanel.jsx`** - Admin dashboard
   - Add question form
   - Input validation
   - Topic selection
   - Success/error messages
   - Questions statistics

5. **`StudentDashboard.jsx`** - Refactored student view
   - All filtering and search logic
   - Stats display
   - Question table

### Enhanced Components:

- **`App.jsx`** - Main app with authentication flow
- **`index.css`** - Enhanced animations and styling
- **`main.jsx`** - AuthProvider wrapper

## 🎯 How to Use

### For Students:
1. Open the app and click "Student" role
2. Enter your name and click "Continue as Student"
3. View all DSA problems
4. Check off problems as you solve them
5. Bookmark important problems
6. Use filters to focus on specific topics/difficulties
7. Track your progress with the stats bar

### For Admins:
1. Open the app and click "Admin" role
2. Enter your name and click "Continue as Admin"
3. Click "Add New Question" button
4. Fill in all question details
5. Click "Add Question" to save
6. View all questions in the overview table
7. See statistics of all problems

## 🎨 UI Highlights

- **Colors**: 
  - Dark slate/purple theme
  - Green for Easy problems
  - Yellow for Medium problems
  - Red for Hard problems
  - Purple/Blue gradients for accents

- **Animations**:
  - Fade-in on page load
  - Hover scale on buttons
  - Floating animations on icons
  - Glow effects on interactive elements

- **Responsive**:
  - Mobile-friendly navigation
  - Grid layouts adapt to screen size
  - Touch-friendly buttons
  - Smooth scrolling

## 📝 Sample Data

The app comes with 40 pre-loaded DSA problems covering:
- Arrays
- Linked Lists
- Trees
- Graphs
- Dynamic Programming
- Hashing
- Binary Search
- Two Pointers
- Stack/Queue
- Backtracking

## 🔧 Technologies Used

- **React 18.2** - UI library
- **Vite 5.1** - Build tool
- **Tailwind CSS 4.2** - Styling
- **LocalStorage** - Data persistence

## 📦 Installation & Running

```bash
# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Access Points

- **Development**: `http://localhost:5173/`
- **Login**: Default page when not authenticated
- **Student Dashboard**: After login as student
- **Admin Panel**: After login as admin

## 🚀 Future Enhancements

Potential features to add:
- Backend integration with database
- User profiles and statistics
- Problem solutions and editorials
- Discussion forum
- Code editor integration
- Difficulty recommendations
- Weekly challenges
- Leaderboards

## 📄 File Structure

```
DSA_Tracking/
├── src/
│   ├── components/
│   │   ├── AdminPanel.jsx (NEW)
│   │   ├── Login.jsx (NEW)
│   │   ├── Navbar.jsx (NEW)
│   │   ├── StudentDashboard.jsx (NEW)
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── FilterBar.jsx
│   │   ├── QuestionTable.jsx
│   │   └── StatsBar.jsx
│   ├── context/
│   │   └── AuthContext.jsx (NEW)
│   ├── data/
│   │   └── questions.js
│   ├── App.jsx (UPDATED)
│   ├── main.jsx (UPDATED)
│   ├── index.css (ENHANCED)
│   ├── App.css
│   └── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 💡 Tips

- Use Admin account to populate questions
- Students can bookmark problems they want to revisit
- Filter by difficulty to practice progressively
- Check your completion percentage in stats
- Use search to find specific problems quickly

---

**Happy coding! 🚀 Keep grinding and master those algorithms! 📚**
