import streamlit as st

# --- PAGE CONFIG ---
st.set_page_config(page_title="Start Learning", page_icon="🎓", layout="centered")

# --- CUSTOM CSS ---
def apply_custom_css():
    st.markdown("""
    <style>
        /* Modern minimal theme */
        :root {
            --primary-blue: #2563EB; /* Soft modern blue */
            --bg-color: #F8FAFC;    /* Slate-50 light gray background */
            --card-bg: #FFFFFF;
            --text-main: #1E293B;   /* Slate-800 dark text */
            --text-muted: #64748B;  /* Slate-500 muted text */
        }
        
        .stApp {
            background-color: var(--bg-color);
        }
        
        /* Typography */
        html, body, [class*="css"] {
            font-family: 'Inter', 'Segoe UI', sans-serif;
            color: var(--text-main);
        }
        
        /* Hide top header/footer for clean look */
        header {visibility: hidden;}
        footer {visibility: hidden;}
        
        /* Center the main block vertically and horizontally */
        .block-container {
            padding-top: 5rem;
            max-width: 600px;
        }

        /* Custom Card Styling using a container div */
        .glass-card {
            background-color: var(--card-bg);
            border-radius: 24px;
            padding: 40px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            text-align: center;
            margin-top: 2rem;
            border: 1px solid #F1F5F9;
        }
        
        .main-title {
            font-size: 32px;
            font-weight: 800;
            color: var(--text-main);
            margin-bottom: 8px;
        }
        
        .sub-title {
            font-size: 16px;
            color: var(--text-muted);
            margin-bottom: 30px;
        }

        /* Streamlit Selectbox custom styling */
        div[data-baseweb="select"] > div {
            border-radius: 12px;
            border-color: #E2E8F0;
            background-color: #F8FAFC;
        }
        
        /* Primary Button custom styling */
        .stButton>button {
            width: 100%;
            background-color: var(--primary-blue) !important;
            color: white !important;
            border-radius: 12px !important;
            padding: 12px 24px !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            border: none !important;
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2) !important;
            transition: all 0.2s ease-in-out !important;
            margin-top: 15px !important;
        }
        .stButton>button:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 15px rgba(37, 99, 235, 0.3) !important;
            background-color: #1D4ED8 !important; /* Darker blue on hover */
        }
    </style>
    """, unsafe_allow_html=True)

# --- APP LAYOUT ---
def main():
    apply_custom_css()
    
    # We use HTML for the clean Title/Subtitle card header
    st.markdown("""
        <div class="glass-card">
            <div class="main-title">Start Your Learning 🚀</div>
            <div class="sub-title">Select your level and subject to proceed</div>
    """, unsafe_allow_html=True)
    
    # Selection Inputs
    st.write("") # Spacer
    level = st.selectbox(
        "Level",
        ["1BAC", "2BAC"],
        index=1,
        help="Choose your high school level"
    )
    
    subject = st.selectbox(
        "Subject",
        ["Mathematics", "Physics & Chemistry", "Life Sciences", "Philosophy", "Arabic"],
        index=0,
        help="Select the subject you want to study"
    )
    
    # Action Button
    st.write("") # Spacer
    if st.button("Continue"):
        # For now, it just shows a success message since AI features are disabled
        st.success(f"Successfully selected **{level}** - **{subject}**. The next phase will load here!")
        
    # Close the HTML card div
    st.markdown("</div>", unsafe_allow_html=True)

if __name__ == "__main__":
    main()
