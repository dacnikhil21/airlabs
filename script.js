/**
 * PRIME AIR LAB SOLUTIONS - CLIENT INTERACTIVE BEHAVIORS
 * File: script.js
 * Theme: "High-Utility Clinical Light Mode" with Teal Accents
 */

// 1. Technical Specifications Data Dictionary for exactly 11 services
const PRODUCT_SPECS = {
    'cleanroom': {
        title: 'Turnkey Modular Cleanrooms',
        description: 'Complete cleanroom systems designed and built for pharmaceutical, medical device, and healthcare environments, meeting all international GMP, FDA, and ISO standards.',
        specs: [
            ['Panel Core Options', 'EPS / PUF / Rockwool (Fire-rated)'],
            ['Cladding Materials', 'SS304 / Powder-coated GI / Antibacterial PVC'],
            ['Compliance Standards', 'ISO Class 5 - 8 / GMP Class A - D'],
            ['Air Tightness Seal', 'Medical grade double-skin silicone gaskets'],
            ['Panel Thickness', '50mm / 80mm / 100mm double-skin panels']
        ]
    },
    'ducted-ot': {
        title: 'Ducted Operation Theatres',
        description: 'Advanced pre-fabricated ducted operating suites designed for seamless hygienic maintenance, customized clinical lighting integration, and premium sterile HEPA airflow controls via extensive overhead ducting systems.',
        specs: [
            ['Ceiling Integration', 'Hermetic Laminar Airflow ceiling grid with HEPA filtration (Ducted)'],
            ['Wall Materials', 'Anti-bacterial SS304 or high-strength clinical glass panels'],
            ['Differential Pressure', 'Positive pressure maintenance (+15 to +20 Pa)'],
            ['Control Panel', 'Digital touch screen displaying temp, RH, gas indicators, & timer'],
            ['Flooring System', 'Conductive or dissipative PVC with seamless coved borders']
        ]
    },
    'ductless-ot': {
        title: 'Ductless Operation Theatres',
        description: 'Next-generation ductless modular operating rooms featuring localized air purification, designed for existing structures without extensive ceiling plenums or ductwork infrastructure.',
        specs: [
            ['Air Circulation', 'Recirculating standalone HEPA filtration towers'],
            ['Wall Materials', 'Anti-bacterial SS304 modular partitions'],
            ['Installation Time', 'Rapid deployment compared to traditional ducted systems'],
            ['Control Panel', 'Centralized environmental touch interface'],
            ['Flooring System', 'Seamless, chemical-resistant clinical grade flooring']
        ]
    },
    'scientific-doors': {
        title: 'Hermetic Scientific & Cleanroom Doors',
        description: 'Clinical-grade airtight doors flush-mounted to prevent micro-contamination, designed to withstand frequent chemical washdowns.',
        specs: [
            ['Door Core', 'Rigid polyurethane foam (PUF) or high-density honeycombed paper'],
            ['Door Cladding', '1.2mm powder-coated GI sheets or AISI 304 surgical steel'],
            ['Airtight Gaskets', 'High-elasticity silicone perimeter seals on three sides'],
            ['Drop Seals', 'Automated heavy-duty mechanical drop-down bottom seal'],
            ['Vision Panels', 'Double-glazed flush-fit safety glass viewing panels with desiccant']
        ]
    },
    'fire-doors': {
        title: 'Fire Rated Cleanroom Doors',
        description: 'Heavy-duty certified fire-resistant doors built to contain heat, smoke, and hazardous cleanroom pressures during thermal incidents.',
        specs: [
            ['Fire Rating', '120 Minutes / 180 Minutes (CBRI/UL certified)'],
            ['Cladding Panel', '1.2mm galvanised steel or SS304 hairline finish'],
            ['Infill Core', 'High-density mineral wool or honeycomb ceramic board'],
            ['Vision Glass', 'Clear fire-rated borosilicate glass vision pane'],
            ['Perimeter Seal', 'Intumescent thermo-expanding smoke seals']
        ]
    },
    'fire-exit-doors': {
        title: 'Panic-Bar Cleanroom Exit Doors',
        description: 'Airtight emergency fire exit door systems equipped with reliable rapid-egress push bar hardware for quick evacuation.',
        specs: [
            ['Emergency Hardware', 'UL-listed heavy-duty steel panic exit push bar'],
            ['Closing Action', 'Adjustable hydraulic automatic overhead door closer'],
            ['Airtight Seal', 'High-flexibility silicone perimeter & auto drop seal'],
            ['Panel Profile', 'Flush-designed door frame without dust traps'],
            ['Locking Type', 'Single-point panic bar exit latch']
        ]
    },
    'pass-box': {
        title: 'Dynamic & Static SS304 Pass Box',
        description: 'A sterile transfer chamber enabling materials to pass between clean and non-controlled spaces while maintaining pressure levels and clinical barrier seals.',
        specs: [
            ['Material Construction', 'AISI 304 or AISI 316 Stainless Steel'],
            ['Operating Type', 'Dynamic (HEPA recirculated) or Static (sterile barrier)'],
            ['Airtight Seal', 'Neoprene/silicone compression gaskets with magnetic closures'],
            ['Interlock Action', 'Heavy-duty electromagnetic locks preventing concurrent access'],
            ['UV Sterilization', '254nm wave UV-C sterilization lamp with auto-timer shutoff']
        ]
    },
    'scrub-station': {
        title: 'Sensor-Controlled Clinical Scrub Station',
        description: 'Surgical wash stations engineered to ensure high hygiene compliance using hands-free operation and high-capacity drainage basins.',
        specs: [
            ['Bay Options', '1-Bay / 2-Bay / 3-Bay custom modular widths'],
            ['Construction Grade', 'AISI 304 heavy-gauge medical stainless steel'],
            ['Flow Trigger', 'Infrared automatic sensors or emergency knee-pedal valves'],
            ['Thermostatic Mixing', 'Built-in thermostatic valve maintaining steady water temp'],
            ['Sanitation Dispenser', 'Integrated automatic infrared sensor surgical soap dispenser']
        ]
    },
    'lab-furniture': {
        title: 'Clinical-Grade Laboratory Furniture',
        description: 'Modular laboratory workbenches, tables, storage cabinets, and cleanroom-compatible surgical steel seating systems.',
        specs: [
            ['Sheet Thickness', '1.2mm AISI 304/316 sanitary stainless steel'],
            ['Cabinet Core', 'Electro-galvanised powder coated GI or SS304'],
            ['Table Tops', 'Epoxy resin, phenolic compact laminate, or SS304 tops'],
            ['Weight Capacity', 'Up to 250 kg per linear meter load capacity'],
            ['Foot Leveler', 'Anti-vibration clinical nylon height adjusters']
        ]
    },
    'qc-lab-setup': {
        title: 'Turnkey QC Lab Infrastructure Setups',
        description: 'End-to-end design, fabrication, and utility routing for pharmaceutical quality control, analysis, and sterile validation laboratories.',
        specs: [
            ['Cleanroom Grade', 'ISO Class 7 or ISO Class 8 (GMP Class C / D)'],
            ['Utility Routing', 'Seamless overhead gas manifolds, solvent conduits, & drain connections'],
            ['Air Exchange', '20 to 30 HEPA-filtered air changes per hour (ACPH)'],
            ['Fume Exhaust', 'Acid-resistant PP chemical fume hood integration'],
            ['Work Surfaces', 'Chemically inert scratch-resistant phenolic core tops']
        ]
    },
    'puff-panels': {
        title: 'Insulated Modular PUF Panels',
        description: 'High-density polyurethane foam sandwich panels designed for rapid cleanroom partitions, thermal insulation, and airtight ceiling grids.',
        specs: [
            ['Core Thickness', '50mm / 80mm / 100mm double-skin panels'],
            ['Density Profile', '40 kg/m³ CFC-free high-pressure polyurethane foam'],
            ['Joint Alignment', 'Tongue and groove locking system with silicone sealing'],
            ['Face Cladding', '0.5mm pre-painted GI / SS304 / PVC laminated sheets'],
            ['Bending Stiffness', 'Excellent load-bearing span capability for ceiling grids']
        ]
    },
    'laf': {
        title: 'Laminar Air Flow (LAF) Workstations',
        description: 'Sterile localized workstations providing ISO Class 5 horizontal or vertical laminar airflow zones to handle biological, chemical, or pharmaceutical materials safely.',
        specs: [
            ['Cleanroom Class', 'ISO Class 5 (Class 100 sterile working area)'],
            ['Airflow Pattern', 'Uniform vertical or horizontal laminar flow (0.45 m/s ± 20%)'],
            ['HEPA Filtration', 'Minipleat H14 HEPA filters (99.999% efficiency at 0.3μm)'],
            ['Pre-Filtration', 'Washable synthetic pre-filter capturing particles down to 10μm'],
            ['Digital Interface', 'Microprocessor screen with velocity controller and blower timer']
        ]
    },
    'hospital-equipment': {
        title: 'Hospital Equipment Manufacturing',
        description: 'Precision-engineered clinical and hospital equipment manufactured using surgical grade SS304/SS316 stainless steel to meet stringent medical safety standards.',
        specs: [
            ['Material Construction', 'Surgical grade AISI 304 / 316 Stainless Steel'],
            ['Manufacturing Standard', 'GMP and FDA compliance verified'],
            ['Surface Finish', 'Electro-polished, bacteria-resistant smooth finishes'],
            ['Customization', 'Tailored ergonomic designs for critical care units'],
            ['Durability', 'Heavy-gauge steel with anti-corrosive chemical resistance']
        ]
    }
};

// Expose openProductModal globally so the inline HTML button triggers function correctly
window.openProductModal = (productId) => {
    const data = PRODUCT_SPECS[productId];
    if (!data) return;

    const titleEl = document.getElementById('modal-product-title');
    const descEl = document.getElementById('modal-product-description');
    const specListEl = document.getElementById('modal-spec-list');
    const modalEl = document.getElementById('product-spec-modal');

    if (titleEl && descEl && specListEl && modalEl) {
        titleEl.textContent = data.title;
        descEl.textContent = data.description;

        specListEl.innerHTML = '';
        data.specs.forEach(([label, value]) => {
            const li = document.createElement('li');
            li.className = 'spec-item';
            li.innerHTML = `<strong>${label}</strong> <span>${value}</span>`;
            specListEl.appendChild(li);
        });

        modalEl.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Lock scrolling
    }
};

// Expose requestServiceQuote globally so B2B card quote actions link/redirect dynamically to contact form
window.requestServiceQuote = (key) => {
    const selectEl = document.getElementById('industrySelect');
    if (selectEl) {
        selectEl.value = key;
        const fullNameInput = document.getElementById('fullName');
        if (fullNameInput) {
            fullNameInput.focus();
        }
    } else {
        // Redirect to contact page carrying the requirement selection key in URL parameter
        window.location.href = `contact.html?service=${key}`;
    }
};

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       0. PRELOADER LOGIC
       ========================================================================== */
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Lock body scrolling while preloader is active
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            document.body.style.overflow = ''; // Restore scrolling
            
            // Remove from DOM after transition
            setTimeout(() => preloader.remove(), 500);
        }, 3000); // 3 seconds
    }

    /* ==========================================================================
       1.5. PARSE URL PARAMETERS FOR INQUIRY AUTO-SELECTION (MULTI-PAGE)
       ========================================================================== */
    const urlParams = new URLSearchParams(window.location.search);
    const serviceKey = urlParams.get('service');
    if (serviceKey) {
        const selectEl = document.getElementById('industrySelect');
        const fullNameInput = document.getElementById('fullName');
        if (selectEl) {
            selectEl.value = serviceKey;
        }
        if (fullNameInput) {
            // Delay focus slightly so page renders fully
            setTimeout(() => fullNameInput.focus(), 400);
        }
    }

    /* ==========================================================================
       2. SCROLL HEADER CONTROLS
       ========================================================================== */
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    /* ==========================================================================
       3. RESPONSIVE SIDEBAR MOBILE NAVIGATION
       ========================================================================== */
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const menuOverlay = document.getElementById('menu-overlay');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    const toggleMobileMenu = (open = true) => {
        if (open) {
            menuOverlay.classList.add('active');
            mobileSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            menuOverlay.classList.remove('active');
            mobileSidebar.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (menuToggleBtn) menuToggleBtn.addEventListener('click', () => toggleMobileMenu(true));
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', () => toggleMobileMenu(false));
    if (menuOverlay) menuOverlay.addEventListener('click', () => toggleMobileMenu(false));
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => toggleMobileMenu(false));
    });

    /* ==========================================================================
       4. SMOOTH SCROLLING WITH OFFSET FOR STICKY HEADER
       ========================================================================== */
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = header.classList.contains('scrolled') ? 72 : 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================================================
       5. SCROLL INTERSECTION OBSERVER FOR ACTIVE NAV HIGHLIGHTS
       ========================================================================== */
    const sections = document.querySelectorAll('section[id], header[id]');
    const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                desktopLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        const targetId = href.substring(1);
                        if (targetId === activeId || (activeId === 'hero' && targetId === 'hero')) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    }
                });

                mobileMenuLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        const targetId = href.substring(1);
                        if (targetId === activeId || (activeId === 'hero' && targetId === 'hero')) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    /* ==========================================================================
       6. SPECIFICATIONS MODAL CLOSING LOGIC
       ========================================================================== */
    const specModal = document.getElementById('product-spec-modal');
    const closeModalTrigger = document.getElementById('close-modal-trigger');

    const closeModal = () => {
        if (specModal) {
            specModal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    };

    if (closeModalTrigger) {
        closeModalTrigger.addEventListener('click', closeModal);
    }

    if (specModal) {
        specModal.addEventListener('click', (e) => {
            if (e.target === specModal) {
                closeModal();
            }
        });
    }

    // Keyboard ESC listener to close modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    /* ==========================================================================
       7. FEASIBILITY INQUIRY FORM VALIDATION
       ========================================================================== */
    const consultForm = document.getElementById('consult-inquiry-form');
    const formInnerContainer = document.getElementById('form-inner-container');
    const successPanel = document.getElementById('consult-success-panel');
    const submitBtn = document.getElementById('submit-consult-btn');
    const successUser = document.getElementById('consult-user-name');
    const resetFormBtn = document.getElementById('reset-consult-btn');

    // Inputs
    const fullNameInput = document.getElementById('fullName');
    const phoneInput = document.getElementById('phoneNumber');
    const emailInput = document.getElementById('emailAddress');

    // Error Labels
    const nameError = document.getElementById('fullname-error');
    const phoneError = document.getElementById('phone-error');
    const emailError = document.getElementById('email-error');

    // Premium Input Validation
    const validateConsultationForm = () => {
        let isValid = true;

        // Full Name Validation
        if (!fullNameInput.value.trim()) {
            nameError.style.display = 'block';
            fullNameInput.style.borderColor = 'var(--color-error)';
            isValid = false;
        } else {
            nameError.style.display = 'none';
            fullNameInput.style.borderColor = '';
        }

        // Phone Number Validation (checks if empty or has less than 8 characters)
        const digits = phoneInput.value.replace(/\D/g, '');
        if (!phoneInput.value.trim() || digits.length < 8) {
            phoneError.style.display = 'block';
            phoneInput.style.borderColor = 'var(--color-error)';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
            phoneInput.style.borderColor = '';
        }

        // Email Address Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
            emailError.style.display = 'block';
            emailInput.style.borderColor = 'var(--color-error)';
            isValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.style.borderColor = '';
        }

        return isValid;
    };

    // Live validation resets on input
    if (fullNameInput) {
        fullNameInput.addEventListener('input', () => {
            if (fullNameInput.value.trim()) {
                nameError.style.display = 'none';
                fullNameInput.style.borderColor = '';
            }
        });
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            const digits = phoneInput.value.replace(/\D/g, '');
            if (phoneInput.value.trim() && digits.length >= 8) {
                phoneError.style.display = 'none';
                phoneInput.style.borderColor = '';
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('input', () => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() && emailPattern.test(emailInput.value.trim())) {
                emailError.style.display = 'none';
                emailInput.style.borderColor = '';
            }
        });
    }

    if (consultForm) {
        consultForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!validateConsultationForm()) return;

            // Submit Button Loading state
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" style="animation: rotateSpinner 1s linear infinite; vertical-align: middle; margin-right: 8px;">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(1 1)" stroke-width="3">
                            <circle stroke-opacity=".2" cx="18" cy="18" r="18"/>
                            <path d="M36 18c0-9.94-8.06-18-18-18"/>
                        </g>
                    </g>
                </svg>
                CALIBRATING REQUEST...
            `;

            // Inject spinner keyframes dynamically if not present
            if (!document.getElementById('spinner-keyframes')) {
                const styleSheet = document.createElement('style');
                styleSheet.id = 'spinner-keyframes';
                styleSheet.textContent = `
                    @keyframes rotateSpinner {
                        100% { transform: rotate(360deg); }
                    }
                `;
                document.head.appendChild(styleSheet);
            }

            // Simulate server validation lag (1.5 seconds)
            setTimeout(() => {
                const userName = fullNameInput.value.trim();
                const userPhone = phoneInput.value.trim();
                const userEmail = emailInput.value.trim();
                const userSelect = document.getElementById('industrySelect').value;
                const userMessage = document.getElementById('projectDetails').value.trim();
                
                // Capitalize or format product key nicely
                const selectEl = document.getElementById('industrySelect');
                const requirementName = selectEl ? selectEl.options[selectEl.selectedIndex].text : userSelect;
                
                if (successUser) successUser.textContent = userName;
                
                // Swap Panel Views
                formInnerContainer.style.display = 'none';
                successPanel.style.display = 'flex';
                
                // Scroll success card gently into view
                successPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                // Reset Button loading state
                submitBtn.disabled = false;
                submitBtn.style.opacity = '';
                submitBtn.innerHTML = originalText;

                // --- REDIRECT TO WHATSAPP Funnel ---
                const whatsappNumber = "919000116672";
                const messageText = `Hello Prime Air Lab Solutions,\n\nI have submitted an inquiry sheet on your website. Here are my project details:\n- Name: ${userName}\n- Phone: ${userPhone}\n- Email: ${userEmail}\n- Requirement: ${requirementName}\n- Message: ${userMessage || "N/A"}`;
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
                
                // Open WhatsApp in a new tab for seamless B2B experience
                window.open(whatsappUrl, '_blank');
            }, 1500);
        });
    }

    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', () => {
            consultForm.reset();
            
            // Clean up error borders
            fullNameInput.style.borderColor = '';
            phoneInput.style.borderColor = '';
            emailInput.style.borderColor = '';
            
            nameError.style.display = 'none';
            phoneError.style.display = 'none';
            emailError.style.display = 'none';
            
            // Swap display states back
            successPanel.style.display = 'none';
            formInnerContainer.style.display = 'block';
            
            // Focus first input field
            setTimeout(() => fullNameInput.focus(), 100);
        });
    }

    /* ==========================================================================
       8. NEWSLETTER SUBSCRIPTION SYSTEM
       ========================================================================== */
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('.newsletter-input');
            const emailVal = input ? input.value.trim() : '';
            
            if (emailVal) {
                // Show a modern clinical temporary notification
                const notification = document.createElement('div');
                notification.style.position = 'fixed';
                notification.style.bottom = '24px';
                notification.style.right = '24px';
                notification.style.backgroundColor = 'var(--color-secondary-container)';
                notification.style.color = 'var(--color-on-secondary-container)';
                notification.style.border = '1px solid var(--color-secondary)';
                notification.style.padding = '16px 24px';
                notification.style.fontFamily = 'var(--font-body)';
                notification.style.fontWeight = '600';
                notification.style.fontSize = '0.9rem';
                notification.style.boxShadow = '0 10px 30px rgba(0, 106, 97, 0.15)';
                notification.style.zIndex = '3000';
                notification.style.display = 'flex';
                notification.style.alignItems = 'center';
                notification.style.gap = '10px';
                notification.innerHTML = `
                    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">verified</span>
                    <span>Lab Insights Registered for ${emailVal}</span>
                `;
                
                document.body.appendChild(notification);
                if (input) input.value = '';

                // Fade out after 4 seconds
                setTimeout(() => {
                    notification.style.transition = 'opacity 0.5s ease';
                    notification.style.opacity = '0';
                    setTimeout(() => notification.remove(), 500);
                }, 4000);
            }
        });
    }

});
