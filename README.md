Below is an **updated prompt** specifically for **Next.js**. It uses a **blue‐white** color palette for the light mode, includes a **dark mode toggle**, and follows the **exact layout** of the original landing page reference. You can feed this prompt to a code generator or use it as a detailed spec when building your Next.js project manually.

---

## Next.js Landing Page Prompt (Blue–White Theme + Dark Mode)

> **“Build a fully responsive landing page in Next.js with a blue–white color scheme, a dark mode toggle, and the following sections in order: (1) top nav with ‘STUDYtable’ logo and dark mode switch, (2) hero with headline, subtext, two CTAs, (3) Unlimited Practice session, (4) Managing students academic life, (5) Personalized Assessment, (6) dark background ‘How we come to this?’ section, (7) final CTA ‘Carfted for your all academic needs’ with button, and (8) footer with brand, notice board, socials, and blog links. Include fade‐in animations on scroll. Place text, headings, buttons, and images exactly as described in the reference mockup. Make sure the default (light) mode is blue–white and the dark mode uses a darker blue or navy background.”*  

### Detailed Requirements

1. **Framework & File Structure**  
   - Use **Next.js** (e.g., `npx create-next-app` or your preferred Next.js starter).  
   - Organize your code in typical Next.js style:  
     - `pages/index.js` for the main landing page.  
     - A dedicated `components/` folder for NavBar, Footer, etc.  
     - Optionally, a `styles/` folder with global or module CSS files.

2. **Color Palette**  
   - **Light Mode** (default):  
     - Background: `#FFFFFF` (white).  
     - Primary accent: a **soft/medium blue** (e.g., `#007BFF`).  
     - Headings/Text: `#000000` (black) or a very dark gray.  
     - Buttons: use the soft/medium blue for the background, white text.  
   - **Dark Mode**:  
     - Background: a darker blue/gray (e.g., `#0B172A` or `#121212`).  
     - Text: `#FFFFFF` (white).  
     - Buttons: slightly lighter/darker variations of blue to maintain contrast.

3. **Dark Mode Toggle**  
   - Place a **switch** or **icon** in the top nav (right side).  
   - On toggle, apply a `dark-mode` class to `<body>` or use a Next.js stateful approach (e.g., a context or a top-level layout component).  
   - In your CSS, override light-mode styles with dark-mode equivalents.  
   - Smooth transitions for background/text changes (e.g., `transition: background-color 0.3s, color 0.3s;`).

4. **Top Navigation**  
   - A **fixed** top navbar with a small shadow.  
   - Left side: brand text **“STUDYtable”**.  
   - Right side: dark mode toggle.  
   - Light mode: white background, black text.  
   - Dark mode: dark background, white text.

5. **Hero Section**  
   - Left side:  
     > “Optimize Your Performance For JEE, NEET, and Boards”  
   - Subtitle:  
     > “Your personal AI-Tutor for all academic needs. Whether it’s school exams, boards or competitive exams we plan, manage, and help you clear your doubts instantly.”  
   - Two CTAs side by side:  
     - **Button**: “Apply for admission” (primary, blue background, white text).  
     - **Link**: “Sign In →” (secondary, minimal style).  
   - Center these elements, with generous padding (60–80px top/bottom).  
   - Add a **fade-in** or **slide-down** animation on page load or on scroll.
   - **"Unlimited Practice session"**  
     - Heading: "Unlimited Practice session" (slightly smaller than hero).  
     - Paragraph:  
       > “For topics and subjects you go through in your school and coaching every day, we create instant practice session specially made for your day's need. Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions – it's like having a Home tutor 24X7.”  
     - Right side (on desktop): a mock chat UI or screenshot.  
     - On mobile, stack text first, then chat UI.  
     - Add a **fade-in** from bottom animation.
   - **"Managing students academic life"**  
     - Heading: "Managing students academic life"  
     - Paragraph:  
       > “There is more to study than just practicing giving test. To meet the requirement of exam, we need to carefully do the revision, repeatedly align our study plan and to understand students own learning curve. This all needs to be done along with schools test and other scholarship exams. We manage it all for you. So that you focus on learning and worry no more.”  
     - Right side: Q&A snippet or screenshot.  
     - Fade or slide-in animation.
   - **"Personalized Assessment"**  
     - Heading: "Personalized Assessment"  
     - Paragraph:  
       > “We measure your learning differently. Not just comparing you among your classmates and peers rather, how much you have learnt and how much have your skills in each subject have grown. We create test based on your learning session and exam requirement to understand and modify study plan for you. The test are uniquely created for each student improve and advance their respective knowledge.”  
     - Right side: progress chart / subject breakdown.  
     - Slide-in or fade-in animation.
   - **Dark Section: "How we come to this?"**  
     - Full‐width container with a **dark background** (can be a deep navy or near‐black).  
     - Heading: "How we come to this?"  
     - Paragraph:  
       > “We observed and researched for three years in a variety of student. Where The best needs more attention to do better and the student struggling needs more attention to improve their own abilities. All students need personal attention. Based on the notion of 'Personal attention' we have built our algorithm and AI tutor to cater each children uniquely…”  
     - A **button** or link: "Read the full story →"  
     - Ensure text is white on the dark background, with adequate padding.
   - **Final CTA Section**  
     - Centered text: "Carfted for your all academic needs" (mimic the exact spelling if you want the same "Carfted" from the reference).  
     - Button below: "Get your Entry" (primary style).  
     - Generous spacing above and below.

6. **Footer**  
   - Left side: brand text “Studytable” + ` 2025 Studytable`.  
   - Center/right: “Notice Board” link or button.  
   - Right side:  
     - Social icons (Instagram, WhatsApp).  
     - Blog links (e.g., “How we plan learning session?”, “How we plan assessment session?”, “How we manage student life?”, “The effective student”).  
   - In dark mode, invert text color to white.

7. **Animations**  
   - Use a simple approach with `useEffect` + intersection observer to add a `visible` class as sections scroll into view, or use an existing library (e.g., [Framer Motion](https://www.framer.com/motion/) or [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)).  
   - Example CSS:
     ```css
     .fade-in-up {
       opacity: 0;
       transform: translateY(30px);
       transition: opacity 0.5s ease, transform 0.5s ease;
     }
     .fade-in-up.visible {
       opacity: 1;
       transform: translateY(0);
     }
     ```

8. **Responsive Design**  
   - For desktop: use two‐column layouts where indicated (e.g., “Unlimited Practice session,” “Managing students academic life,” etc.).  
   - For mobile/tablet: stack elements vertically with enough spacing.  
   - Maintain consistent spacing (60–80px top/bottom) for each section.

---
