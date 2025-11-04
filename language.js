// language.js - Multi-language implementation for Luxury Haven Hotel

// Language configuration
const languages = {
    en: {
        // Navigation & Header
        hotelName: "Luxury Palace",
        home: "Home",
        rooms: "Rooms & Suites",
        dining: "Dining",
        spa: "Spa & Wellness",
        gallery: "Gallery",
        contact: "Contact",
        login: "Login",
        bookNow: "Book Now",
        
        // Hero Section
        welcomeTitle: "Welcome to Hotel luxury ♕",
        welcomeSubtitle: "A luxury hotel experience that blends comfort",
        welcomeDescription: "Enjoy an unforgettable stay with breathtaking views, stylish rooms, and personalized services designed to make every moment special. We're here to ensure your journey is filled with comfort and luxury",
        chatWithUs: "Chat with us",
        
        // About Section
        aboutUs: "About Us",
        us: "Us",
        aboutSubtitle: "More than 10 years of comfort and luxury",
        welcome: "Welcome",
        toHotel: "to Hotel Golden Star",
        luxuryComfort: "Where Luxury Meets Comfort",
        aboutDescription1: "Founded in 1990, our hotel has been a beacon of sophistication and impeccable service. What began as a small boutique establishment has grown into one of the most prestigious addresses in the city, without ever losing our personal touch.",
        aboutDescription2: "Every corner of our hotel tells a story - from the handcrafted furnishings to the curated art collection. We believe true luxury lies in the details and in creating memorable experiences for our guests.",
        feature1: "Introduce best the Hotel Booking & their services",
        feature2: "Booking mission statement or Luxury hotel",
        feature3: "Highlight featured on Booking project",
        readMore: "Read more",
        
        // Stats
        yearsOf: "Years Of",
        experience: "Experience",
        online: "Online",
        booking: "Booking",
        experienced: "Experienced",
        bellboy: "Bellboy",
        bestHotel: "Best Hotel",
        award: "Award",
        
        // Rooms Section
        ourRooms: "Our Rooms",
        roomsSubtitle: "Choose from our exquisite selection of accommodations",
        deluxeRoom: "Deluxe Room",
        deluxeDescription: "Spacious room with premium amenities and stunning city views",
        kingBed: "King Bed",
        guests: "2 Guests",
        night: "night",
        executiveSuite: "Executive Suite",
        executiveDescription: "Luxurious suite with separate living area and premium services",
        presidentialSuite: "Presidential Suite",
        presidentialDescription: "The ultimate in luxury with panoramic views and exclusive amenities",
        
        // Services Section
        ourServices: "Our Services",
        services: "Services",
        servicesSubtitle: "Exceptional amenities for an unforgettable stay",
        gourmetDining: "Gourmet Dining",
        gourmetDescription: "Experience world-class cuisine at our award-winning restaurants",
        spaWellness: "Spa & Wellness",
        spaDescription: "Rejuvenate with our luxurious spa treatments and facilities",
        infinityPool: "Infinity Pool",
        poolDescription: "Relax by our stunning infinity pool with panoramic views",
        concierge: "24/7 Concierge",
        conciergeDescription: "Our dedicated staff is available around the clock to assist you",
        highSpeedWifi: "High-Speed WiFi",
        wifiDescription: "Stay connected with our complimentary high-speed internet",
        valetParking: "Valet Parking",
        parkingDescription: "Complimentary valet service for all our guests",
        
        // About Services
        theRestaurant: "The Restaurant",
        restaurantDescription:" Indulge your senses with exquisite dishes prepared by our master chefs. Our restaurant combines international flavors with local ingredients, offering an unforgettable dining experience in a warm and elegant atmosphere",
        theSpa: "The Spa",
        spaDescription2: "Rejuvenate your body and soul at our luxury spa. From soothing massages to revitalizing treatments, every detail is designed to provide complete relaxation and inner harmony.",
        thePool: "The Pool",
        poolDescription2: "Dive into tranquility. Surrounded by lush landscapes and peaceful vibes, our infinity pool is the perfect place to unwind, sip your favorite drink, and soak up the sun.",
        bookingNow: "Booking now",
        
        // Why Choose Us
        whyChoose: "Why Choose us",
        chooseUs: "choose Us",
        whyChooseSubtitle: "choose the best services comfort and luxury",
        whyChooseGoal: "Our goal is Ensure Hotel Booking Accessibility.",
        whyChooseDescription: "Hoteler in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website.",
        projectDone: "Project Done",
        happyClients: "Happy Clients",
        serviceDone: "Service Done",
        
        // Restaurant Section
        culinaryExcellence: "Culinary Excellence",
        epicureanDelights: "Épicurean Delights",
        fineDining: "Fine Dining Experience",
        restaurantSubtitle: "Indulge in an exquisite culinary journey where traditional techniques meet innovative flavors. Our master chefs craft each dish with passion, using only the finest seasonal ingredients.",
        seasonalMenu: "Seasonal Menu",
        seasonalDescription: "Fresh ingredients curated daily",
        sommelierSelection: "Sommelier Selection",
        sommelierDescription: "Expertly paired wines",
        awardWinning: "Award Winning",
        awardDescription: "Michelin recognized cuisine",
        reserveTable: "Reserve a Table",
        viewMenu: "View Menu",
        gourmetAppetizers: "Gourmet Appetizers",
        exquisiteEntrees: "Exquisite Entrees",
        restaurantTestimonial: "\"An unforgettable dining experience. Each dish was a masterpiece, and the service was impeccable. The wine pairing elevated the entire meal to another level.\"",
        foodCritic: "Food Critic",
        signatureDishes: "Signature Dishes",
        chefSelection: "Chef's Selection",
        truffleRisotto: "Truffle Risotto",
        truffleDescription: "Arborio rice with black truffle and parmesan",
        wagyuBeef: "Wagyu Beef Tenderloin",
        wagyuDescription: "With roasted vegetables and red wine reduction",
        atlanticLobster: "Atlantic Lobster",
        lobsterDescription: "Butter poached with saffron sauce",
        chocolateSouffle: "Chocolate Soufflé",
        souffleDescription: "With vanilla bean ice cream",
        
        // Gallery Section
        hotelGallery: "Jim Hotel Gallery",
        gallerySubtitle: "Explore the luxurious amenities and breathtaking views of Jim Hotel through our photo collection",
        grandEntrance: "Grand Entrance",
        entranceDescription: "The stunning facade of Jim Hotel at sunset",
        presidentialSuite: "Presidential Suite",
        suiteDescription: "Our most luxurious accommodation",
        infinityPool: "Infinity Pool",
        poolDescription3: "Relax with breathtaking ocean views",
        gourmetRestaurant: "Gourmet Restaurant",
        restaurantDescription2: "Michelin-star dining experience",
        luxurySpa: "Luxury Spa",
        spaDescription3: "Ultimate relaxation and rejuvenation",
        skyLounge: "Sky Lounge",
        loungeDescription: "Signature cocktails with panoramic views",
        conferenceHall: "Conference Hall",
        conferenceDescription: "State-of-the-art meeting facilities",
        tropicalGardens: "Tropical Gardens",
        gardensDescription: "Lush landscapes surrounding the property",
        
        // Booking Section
        exclusiveExperience: "Exclusive Experience",
        eleganceRedefined: "ELEGANCE REDEFINED",
        luxurySerenity: "Where Luxury Meets Serenity",
        bookingSubtitle: "Immerse yourself in unparalleled luxury at our award-winning hotel. Experience world-class service, exquisite accommodations, and memories that will last a lifetime.",
        bookYourStay: "Book Your Stay",
        exploreSuites: "Explore Suites",
        personalConcierge: "Personal Concierge",
        conciergeDescription2: "Dedicated service for your every need",
        wellnessRetreat: "Wellness Retreat",
        wellnessDescription: "Rejuvenate in our world-class spa",
        michelinDining: "Michelin Dining",
        michelinDescription: "Culinary excellence by master chefs",
        
        // Testimonials
        guestTestimonials: "Guest Testimonials",
        testimonials: "Testimonials",
        testimonialsSubtitle: "What our guests say about us",
        testimonial1: "Absolutely stunning hotel with exceptional service. The attention to detail was remarkable, and the staff went above and beyond to make our stay perfect.",
        testimonial2: "The presidential suite was beyond our expectations. The view was breathtaking, and the amenities were top-notch. We'll definitely be returning!",
        testimonial3: "From the moment we arrived, we felt pampered. The spa treatments were divine, and the gourmet dining options were exceptional. Highly recommend!",
        
        // Booking Form
        bookYourStay: "Book Your Stay",
        bookingDescription: "Ready to experience luxury? Check availability and book your perfect stay with us.",
        checkIn: "Check In",
        checkOut: "Check Out",
        adults: "Adults",
        children: "Children",
        roomType: "Room Type",
        checkAvailability: "Check Availability",
        
        // Contact Section
        contactUs: "Contact Us",
        contactSubtitle: "We'd love to hear from you",
        yourName: "Your Name",
        yourEmail: "Your Email",
        subject: "Subject",
        yourMessage: "Your Message",
        sendMessage: "Send Message",
        
        // Blog Section
        luxuryHotel: "Luxury Hotel",
        blog: "Blog",
        blogSubtitle: "Discover the latest news, tips, and stories from our luxury hotel and the surrounding area",
        premiumSuite: "Premium Suite",
        accommodation: "Accommodation",
        blogTitle1: "New Luxury Suites With Breathtaking Ocean Views",
        blogDescription1: "Our newly renovated ocean-view suites offer the ultimate in luxury and comfort with premium amenities and stunning vistas.",
        gourmet: "Gourmet",
        blogTitle2: "Exclusive Wine Tasting Event With Our Master Sommelier",
        blogDescription2: "Join us for an exclusive wine tasting event featuring rare vintages from our cellar, expertly paired with gourmet delicacies.",
        wellness: "Wellness",
        blogTitle3: "New Relaxation Treatments at Our Luxury Spa Center",
        blogDescription3: "Experience ultimate relaxation with our new spa treatments designed to rejuvenate your body and mind during your stay.",
        hotelManager: "Hotel Manager",
        executiveChef: "Executive Chef",
        spaDirector: "Spa Director",
        
        // Newsletter
        joinExclusive: "Join Our Exclusive Circle",
        newsletterDescription: "Subscribe to our premium newsletter and receive curated luxury travel insights, special member-only offers, and personalized recommendations for your next lavish getaway.",
        subscribeNow: "Subscribe Now",
        vipTreatment: "VIP Treatment",
        exclusiveDiscounts: "Exclusive Discounts",
        earlyAccess: "Early Access",
        specialRewards: "Special Rewards",
        welcomeLuxury: "Welcome to Our Luxury Circle!",
        successMessageText: "Thank you for subscribing. We've sent a confirmation email with your exclusive welcome gift.",
        
        // FAQ Section
        frequentlyAsked: "Frequently Asked",
        questions: "Questions",
        faqSubtitle: "Find quick answers to common inquiries about our hotel and services",
        faq1: "What are your check-in and check-out times?",
        faqAnswer1: "Check-in time is 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability and additional charges.",
        faq2: "Do you offer airport transportation?",
        faqAnswer2: "Yes, we provide complimentary airport shuttle service for our guests. Please inform us of your flight details at least 24 hours in advance to arrange pickup.",
        faq3: "Is parking available at the hotel?",
        faqAnswer3: "We offer valet parking services for $35 per night. Self-parking is available in the nearby garage at a discounted rate for hotel guests.",
        faq4: "Are pets allowed in the hotel?",
        faqAnswer4: "We welcome pets up to 25 lbs with a non-refundable cleaning fee of $75 per stay. Please notify us in advance if you plan to bring your pet.",
        faq5: "What dining options are available?",
        faqAnswer5: "We have three dining venues: our signature restaurant serving international cuisine, a casual bistro, and a rooftop bar with panoramic city views. Room service is available 24/7.",
        
        // Footer
        luxuryHaven: "Luxury Haven",
        footerDescription: "Redefining luxury hospitality with exceptional service, world-class amenities, and unforgettable experiences.",
        quickLinks: "Quick Links",
        eventSpaces: "Event Spaces",
        transportation: "Transportation",
        specialPackages: "Special Packages",
        newsletterFooter: "Subscribe to our newsletter for special offers and updates.",
        allRightsReserved: "All Rights Reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiesPolicy: "Cookies Policy",
                    // Testimonials page
            Testimonialsmain: "What Clients Say",
            testimonailsPageText:"Our business grew with their support",
           
            // about page
                   // CTA Section
        ctaTitle: "Experience Majestic Hospitality",
        ctaText: "Book your stay with us and discover why we've been Casablanca's premier luxury destination for over 40 years.",
        bookNow: "Book Now",
                // About Hero Section
        TitleAbout: "about",
        AboutTextWolcome: "Welcome to Daoudi Hotel, where comfort meets elegance. Enjoy a luxurious stay, exceptional service, and unforgettable moments in the heart of the city.",
             //  page contact
                // Contact Hero Section
        contactHeroTitle: "Get In Touch With Us",
        contactHeroSubtitle: "With Us",
        contactHeroText: "We're here to assist you with any inquiries about our luxury accommodations and services. Reach out to us through any of the following channels.",
        
        // Contact Information Section
        contactInfoTitle: "Contact Information",
        locationTitle: "Our Location",
        locationText: "123 Luxury Avenue, Prestige District City, Country 12345",
        phoneTitle: "Phone Number", 
        phoneText: "+1 (234) 567-8900 +1 (234) 567-8901",
        emailTitle: "Email Address",
        emailText: "info@luxuryhotel.com reservations@luxuryhotel.com",
        hoursTitle: "Opening Hours",
        hoursText: "Front Desk: 24/7 Restaurant: 7:00 AM - 11:00 PM Spa: 9:00 AM - 9:00 PM",
        
        // Contact Form Section
        contactFormTitle: "Send Us a Message",
        nameLabel: "Full Name",
        namePlaceholder: "Your Name",
        emailLabel: "Email Address", 
        emailPlaceholder: "Your Email",
        phoneLabel: "Phone Number",
        phonePlaceholder: "Your Phone",
        subjectLabel: "Subject",
        subjectPlaceholder: "Message Subject",
        messageLabel: "Your Message",
        messagePlaceholder: "How can we help you?",
        submitButton: "Send Message",
        // Gallery Section
        TitleGallery: "Gallery Our",
        TextGallrey: "Discover the beauty and elegance of our luxury hotel through our photo collection",
                // Rooms page
        RoomsHoreTitle: "Luxury Palace Rooms",
        RoomsHoreText: "find here the best rooms ,Exceptional amenities for an unforgettable stay",
          // Resrvices page
                "servicesTitle": "Our Services ",
        "poolTitle": "Infinity Pool",
        "restaurantTitle": "Gourmet Dining",
        "spaTitle": "Luxury Spa",
        "gymTitle": "Fitness Center",
        "conciergeTitle": "24/7 Concierge",
        "exploreBtn": "Explore",
        "discoverBtn": "Discover",
        "relaxBtn": "Relax",
        "energizeBtn": "Energize",
        "requestBtn": "Request",
        "whatsappText": "Chat with us",
                  // room page
                          "roomsTitle": "rooms",
        "holidaySubtitle": "enjoy your holiday in Moroccan",
        "roomTitle": "Deluxe Ocean View Suite",
        "roomLocation": "Malibu, California",
        "ratingText": "4.7 (128 reviews)",
        "roomDetailsTitle": "Room Details",
        "roomDescription": "Experience unparalleled luxury in our Deluxe Ocean View Suite. This spacious 65m² suite features floor-to-ceiling windows offering breathtaking views of the Pacific Ocean, a king-sized bed with premium linens, and a separate living area with designer furnishings.",
        "specificationsTitle": "Specifications",
        "sizeDetail": "65 m² / 700 ft²",
        "bedDetail": "1 King Bed",
        "occupancyDetail": "Max Occupancy: 3 Guests",
        "wifiDetail": "Free High-Speed WiFi",
        "beachDetail": "Private Beach Access",
        "breakfastDetail": "Breakfast Included",
        "amenitiesTitle": "Room Amenities",
        "coffeeAmenity": "Nespresso Machine",
        "tvAmenity": "55\" Smart TV",
        "acAmenity": "Air Conditioning",
        "minibarAmenity": "Minibar",
        "tubAmenity": "Deep Soaking Tub",
        "beachEssentialsAmenity": "Beach Essentials",
        "safeAmenity": "In-room Safe",
        "robesAmenity": "Robes & Slippers",
        "chargingAmenity": "USB Charging Stations",
        "commentsTitle": "Guest Comments (3)",
        "comment1": "We stayed in one of these new suites last weekend, and the experience was absolutely incredible! The attention to detail and the stunning ocean views made our anniversary celebration truly special.",
        "comment2": "The marble bathroom alone is worth the upgrade! I've never experienced such luxury in a hotel room. The panoramic views of the ocean from the balcony are breathtaking, especially at sunrise.",
        "comment3": "As a frequent traveler, I've stayed in many luxury hotels around the world, but these new suites are truly exceptional. The combination of elegant design, premium amenities, and stunning location is unmatched.",
        "replyBtn": "Reply",
        "leaveCommentTitle": "Leave a Comment",
        "nameLabel": "Name",
        "emailLabel": "Email",
        "commentLabel": "Comment",
        "postCommentBtn": "Post Comment",
        "bookTitle": "Book Your Stay",
        "checkInLabel": "Check In",
        "checkOutLabel": "Check Out",
        "adultsLabel": "Adults",
        "childrenLabel": "Children",
        "roomsLabel": "Rooms",
        "onePerson": "1 Person",
        "twoPeople": "2 People",
        "threePeople": "3 People",
        "fourPeople": "4 People",
        "noChildren": "No Children",
        "oneChild": "1 Child",
        "twoChildren": "2 Children",
        "oneRoom": "1 Room",
        "twoRooms": "2 Rooms",
        "threeRooms": "3 Rooms",
        "extraServicesTitle": "Extra Services",
        "roomCleaningLabel": "Room Cleaning",
        "roomCleaningPrice": "$12 / Night",
        "parkingLabel": "Parking",
        "parkingPrice": "Free",
        "transportLabel": "Airport Transport",
        "transportPrice": "$30 / Night",
        "petFriendlyLabel": "Pet-Friendly",
        "petFriendlyPrice": "$40 / Night",
        "nightsPrice": "2 Nights",
        "parkingPriceSummary": "Parking",
        "freePrice": "Free",
        "totalPrice": "Total Price",
        "bookNowBtn": "Book Now",
        "reviewsTitle": "Reviews",
        "reviewsDescription": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
        "comfortRating": "Comfort",
        "facilitiesRating": "Facilities",
        "locationRating": "Location",
        "priceRating": "Price"
    },
        es: {
            // Navigation & Header
            hotelName: "Palacio de Lujo",
            home: "Inicio",
            rooms: "Habitaciones y Suites",
            dining: "Restaurante",
            spa: "Spa y Bienestar",
            gallery: "Galería",
            contact: "Contacto",
            login: "Iniciar Sesión",
            bookNow: "Reservar Ahora",
            
            // Hero Section
            welcomeTitle: "Bienvenido al Hotel de Lujo ♕",
            welcomeSubtitle: "Una experiencia hotelera de lujo que combina comodidad",
            welcomeDescription: "Disfrute de una estancia inolvidable con vistas impresionantes, habitaciones elegantes y servicios personalizados diseñados para hacer que cada momento sea especial. Estamos aquí para garantizar que su viaje esté lleno de comodidad y lujo",
            chatWithUs: "Chatea con nosotros",
            
            // About Section
            aboutUs: "Sobre Nosotros",
            us: "Nosotros",
            aboutSubtitle: "Más de 10 años de confort y lujo",
            welcome: "Bienvenido",
            toHotel: "al Hotel Golden Star",
            luxuryComfort: "Donde el Lujo se Encuentra con la Comodidad",
            aboutDescription1: "Fundado en 1990, nuestro hotel ha sido un faro de sofisticación y servicio impecable. Lo que comenzó como un pequeño establecimiento boutique se ha convertido en una de las direcciones más prestigiosas de la ciudad, sin perder nunca nuestro toque personal.",
            aboutDescription2: "Cada rincón de nuestro hotel cuenta una historia, desde los muebles hechos a mano hasta la colección de arte curada. Creemos que el verdadero lujo está en los detalles y en crear experiencias memorables para nuestros huéspedes.",
            feature1: "Presentar los mejores servicios de reserva de hotel",
            feature2: "Declaración de misión de reserva o hotel de lujo",
            feature3: "Destacar características en el proyecto de reserva",
            readMore: "Leer más",
            
            // Stats
            yearsOf: "Años De",
            experience: "Experiencia",
            online: "En Línea",
            booking: "Reserva",
            experienced: "Experimentado",
            bellboy: "Botones",
            bestHotel: "Mejor Hotel",
            award: "Premio",
            
            // Rooms Section
            ourRooms: "Nuestras Habitaciones",
            roomsSubtitle: "Elija entre nuestra exquisita selección de alojamientos",
            deluxeRoom: "Habitación Deluxe",
            deluxeDescription: "Habitación espaciosa con comodidades premium y vistas impresionantes a la ciudad",
            kingBed: "Cama King",
            guests: "2 Huéspedes",
            night: "noche",
            executiveSuite: "Suite Ejecutiva",
            executiveDescription: "Suite lujosa con área de estar separada y servicios premium",
            presidentialSuite: "Suite Presidencial",
            presidentialDescription: "Lo último en lujo con vistas panorámicas y comodidades exclusivas",
            
            // Services Section
            ourServices: "Nuestros Servicios",
            services: "Servicios",
            servicesSubtitle: "Servicios excepcionales para una estancia inolvidable",
            gourmetDining: "Gastronomía Gourmet",
            gourmetDescription: "Experimente cocina de clase mundial en nuestros restaurantes galardonados",
            spaWellness: "Spa y Bienestar",
            spaDescription: "Rejuvenezca con nuestros lujosos tratamientos de spa e instalaciones",
            infinityPool: "Piscina Infinita",
            poolDescription: "Relájese junto a nuestra impresionante piscina infinita con vistas panorámicas",
            concierge: "Conserjería 24/7",
            conciergeDescription: "Nuestro personal dedicado está disponible las 24 horas para asistirle",
            highSpeedWifi: "WiFi de Alta Velocidad",
            wifiDescription: "Manténgase conectado con nuestro internet de alta velocidad gratuito",
            valetParking: "Estacionamiento con Valet",
            parkingDescription: "Servicio de valet gratuito para todos nuestros huéspedes",
            
            // About Services
            theRestaurant: "El Restaurante",
            restaurantDescription: "Deléitate con platos exquisitos preparados por nuestros chefs expertos. Nuestro restaurante combina sabores internacionales con ingredientes locales, ofreciendo una experiencia gastronómica inolvidable en un ambiente cálido y elegante.",
            theSpa: "El Spa",
            spaDescription2: "Rejuvenece tu cuerpo y tu alma en nuestro lujoso spa. Desde masajes relajantes hasta tratamientos revitalizantes, cada detalle está diseñado para brindarte relajación total y armonía interior.",
            thePool: "La Piscina",
            poolDescription2: "Sumérgete en la tranquilidad. Rodeada de paisajes exuberantes y un ambiente relajado, nuestra piscina infinita es el lugar perfecto para descansar, disfrutar de tu bebida favorita y tomar el sol.",
            bookingNow: "Reservar ahora",
            
            // Why Choose Us
            whyChoose: "Por Qué Elegirnos",
            chooseUs: "Elegirnos",
            whyChooseSubtitle: "elija los mejores servicios de confort y lujo",
            whyChooseGoal: "Nuestro objetivo es garantizar la accesibilidad de la reserva de hotel.",
            whyChooseDescription: "Hoteler de una manera poderosa de no solo profesiones, sin embargo, en una pasión por nuestra Compañía. Tenemos la tendencia a creer en la idea de que el aspecto inteligente de cualquier sitio web.",
            projectDone: "Proyecto Realizado",
            happyClients: "Clientes Felices",
            serviceDone: "Servicio Realizado",
            
            // Restaurant Section
            culinaryExcellence: "Excelencia Culinaria",
            epicureanDelights: "Delicias Epicúreas",
            fineDining: "Experiencia Gastronómica",
            restaurantSubtitle: "Disfrute de un exquisito viaje culinario donde las técnicas tradicionales se encuentran con sabores innovadores. Nuestros chefs maestros elaboran cada plato con pasión, utilizando solo los mejores ingredientes de temporada.",
            seasonalMenu: "Menú de Temporada",
            seasonalDescription: "Ingredientes frescos seleccionados diariamente",
            sommelierSelection: "Selección de Sommelier",
            sommelierDescription: "Vinos emparejados por expertos",
            awardWinning: "Galardonado",
            awardDescription: "Cocina reconocida por Michelin",
            reserveTable: "Reservar una Mesa",
            viewMenu: "Ver Menú",
            gourmetAppetizers: "Aperitivos Gourmet",
            exquisiteEntrees: "Platos Principales Exquisitos",
            restaurantTestimonial: "\"Una experiencia gastronómica inolvidable. Cada plato fue una obra maestra y el servicio fue impecable. El maridaje de vinos elevó toda la comida a otro nivel.\"",
            foodCritic: "Crítico Gastronómico",
            signatureDishes: "Platos de Autor",
            chefSelection: "Selección del Chef",
            truffleRisotto: "Risotto de Trufa",
            truffleDescription: "Arroz Arborio con trufa negra y parmesano",
            wagyuBeef: "Solomillo de Ternera Wagyu",
            wagyuDescription: "Con verduras asadas y reducción de vino tinto",
            atlanticLobster: "Bogavante del Atlántico",
            lobsterDescription: "Escalfado en mantequilla con salsa de azafrán",
            chocolateSouffle: "Suflé de Chocolate",
            souffleDescription: "Con helado de vainilla",
            
            // Gallery Section
            hotelGallery: "Galería del Hotel Jim",
            gallerySubtitle: "Explore las lujosas comodidades y las impresionantes vistas del Hotel Jim a través de nuestra colección de fotos",
            grandEntrance: "Entrada Principal",
            entranceDescription: "La impresionante fachada del Hotel Jim al atardecer",
            presidentialSuite: "Suite Presidencial",
            suiteDescription: "Nuestro alojamiento más lujoso",
            infinityPool: "Piscina Infinita",
            poolDescription3: "Relájese con impresionantes vistas al océano",
            gourmetRestaurant: "Restaurante Gourmet",
            restaurantDescription2: "Experiencia gastronómica con estrella Michelin",
            luxurySpa: "Spa de Lujo",
            spaDescription3: "Relajación y rejuvenecimiento máximo",
            skyLounge: "Salón en las Alturas",
            loungeDescription: "Cócteles de autor con vistas panorámicas",
            conferenceHall: "Sala de Conferencias",
            conferenceDescription: "Instalaciones de reuniones de última generación",
            tropicalGardens: "Jardines Tropicales",
            gardensDescription: "Paisajes exuberantes que rodean la propiedad",
            
            // Booking Section
            exclusiveExperience: "Experiencia Exclusiva",
            eleganceRedefined: "ELEGANCIA REDEFINIDA",
            luxurySerenity: "Donde el Lujo se Encuentra con la Serenidad",
            bookingSubtitle: "Sumérjase en un lujo inigualable en nuestro hotel galardonado. Experimente servicio de clase mundial, alojamientos exquisitos y recuerdos que durarán toda la vida.",
            bookYourStay: "Reserve Su Estancia",
            exploreSuites: "Explorar Suites",
            personalConcierge: "Conserje Personal",
            conciergeDescription2: "Servicio dedicado para cada una de sus necesidades",
            wellnessRetreat: "Retiro de Bienestar",
            wellnessDescription: "Rejuvenezca en nuestro spa de clase mundial",
            michelinDining: "Gastronomía Michelin",
            michelinDescription: "Excelencia culinaria por chefs maestros",
            
            // Testimonials
            guestTestimonials: "Testimonios de Huéspedes",
            testimonials: "Testimonios",
            testimonialsSubtitle: "Lo que nuestros huéspedes dicen de nosotros",
            testimonial1: "Hotel absolutamente impresionante con un servicio excepcional. La atención al detalle fue notable y el personal hizo todo lo posible para que nuestra estancia fuera perfecta.",
            testimonial2: "La suite presidencial superó nuestras expectativas. La vista era impresionante y las comodidades eran de primera categoría. ¡Definitivamente volveremos!",
            testimonial3: "Desde el momento en que llegamos, nos sentimos mimados. Los tratamientos de spa fueron divinos y las opciones de gastronomía gourmet fueron excepcionales. ¡Altamente recomendado!",
            
            // Booking Form
            bookYourStay: "Reserve Su Estancia",
            bookingDescription: "¿Listo para experimentar el lujo? Verifique disponibilidad y reserve su estancia perfecta con nosotros.",
            checkIn: "Entrada",
            checkOut: "Salida",
            adults: "Adultos",
            children: "Niños",
            roomType: "Tipo de Habitación",
            checkAvailability: "Verificar Disponibilidad",
            
            // Contact Section
            contactUs: "Contáctenos",
            contactSubtitle: "Nos encantaría saber de usted",
            yourName: "Su Nombre",
            yourEmail: "Su Correo Electrónico",
            subject: "Asunto",
            yourMessage: "Su Mensaje",
            sendMessage: "Enviar Mensaje",
            
            // Blog Section
            luxuryHotel: "Hotel de Lujo",
            blog: "Blog",
            blogSubtitle: "Descubra las últimas noticias, consejos e historias de nuestro hotel de lujo y sus alrededores",
            premiumSuite: "Suite Premium",
            accommodation: "Alojamiento",
            blogTitle1: "Nuevas Suites de Lujo con Impresionantes Vistas al Océano",
            blogDescription1: "Nuestras suites recién renovadas con vista al océano ofrecen lo último en lujo y comodidad con servicios premium y vistas impresionantes.",
            gourmet: "Gourmet",
            blogTitle2: "Evento Exclusivo de Cata de Vinos con Nuestro Sumiller Maestro",
            blogDescription2: "Únase a nosotros para un evento exclusivo de cata de vinos con añadas raras de nuestra bodega, perfectamente maridadas con delicias gourmet.",
            wellness: "Bienestar",
            blogTitle3: "Nuevos Tratamientos de Relajación en Nuestro Centro de Spa de Lujo",
            blogDescription3: "Experimente la relajación máxima con nuestros nuevos tratamientos de spa diseñados para rejuvenecer su cuerpo y mente durante su estancia.",
            hotelManager: "Gerente del Hotel",
            executiveChef: "Chef Ejecutivo",
            spaDirector: "Directora del Spa",
            
            // Newsletter
            joinExclusive: "Únase a Nuestro Círculo Exclusivo",
            newsletterDescription: "Suscríbase a nuestro boletín premium y reciba información exclusiva sobre viajes de lujo, ofertas especiales solo para miembros y recomendaciones personalizadas para su próximo viaje lujoso.",
            subscribeNow: "Suscribirse Ahora",
            vipTreatment: "Tratamiento VIP",
            exclusiveDiscounts: "Descuentos Exclusivos",
            earlyAccess: "Acceso Anticipado",
            specialRewards: "Recompensas Especiales",
            welcomeLuxury: "¡Bienvenido a Nuestro Círculo de Lujo!",
            successMessageText: "Gracias por suscribirse. Hemos enviado un correo electrónico de confirmación con su regalo de bienvenida exclusivo.",
            
            // FAQ Section
            frequentlyAsked: "Preguntas Frecuentes",
            questions: "Preguntas",
            faqSubtitle: "Encuentre respuestas rápidas a consultas comunes sobre nuestro hotel y servicios",
            faq1: "¿Cuáles son sus horarios de entrada y salida?",
            faqAnswer1: "La hora de entrada es a las 3:00 PM y la salida a las 12:00 PM. El check-in temprano y el check-out tardío pueden estar disponibles bajo petición, sujeto a disponibilidad y cargos adicionales.",
            faq2: "¿Ofrecen transporte desde el aeropuerto?",
            faqAnswer2: "Sí, proporcionamos servicio de traslado gratuito desde el aeropuerto para nuestros huéspedes. Por favor, infórmenos de los detalles de su vuelo con al menos 24 horas de antelación para organizar la recogida.",
            faq3: "¿Hay estacionamiento disponible en el hotel?",
            faqAnswer3: "Ofrecemos servicios de estacionamiento con valet por $35 por noche. El autoestacionamiento está disponible en el garaje cercano a una tarifa con descuento para huéspedes del hotel.",
            faq4: "¿Se permiten mascotas en el hotel?",
            faqAnswer4: "Damos la bienvenida a mascotas de hasta 25 lbs con una tarifa de limpieza no reembolsable de $75 por estancia. Por favor, notifíquenos con anticipación si planea traer a su mascota.",
            faq5: "¿Qué opciones de restaurante están disponibles?",
            faqAnswer5: "Tenemos tres locales de restaurante: nuestro restaurante insignia que sirve cocina internacional, un bistró casual y un bar en la azotea con vistas panorámicas de la ciudad. El servicio de habitaciones está disponible las 24 horas.",
            
            // Footer
            luxuryHaven: "Refugio de Lujo",
            footerDescription: "Redefiniendo la hospitalidad de lujo con servicio excepcional, comodidades de clase mundial y experiencias inolvidables.",
            quickLinks: "Enlaces Rápidos",
            eventSpaces: "Espacios para Eventos",
            transportation: "Transporte",
            specialPackages: "Paquetes Especiales",
            newsletterFooter: "Suscríbase a nuestro boletín para ofertas especiales y actualizaciones.",
            allRightsReserved: "Todos los Derechos Reservados.",
            privacyPolicy: "Política de Privacidad",
            termsOfService: "Términos de Servicio",
            cookiesPolicy: "Política de Cookies", 
            // Testimonials page
            Testimonialsmain: "Avis Clients",
            testimonailsPageText:"Mon entreprise a grandi grâce à eux.",   
             // page about - Spanish
            // CTA Section - Spanish
        ctaTitle: "Experimente la Hospitalidad Majestuosa",
        ctaText: "Reserve su estadía con nosotros y descubra por qué hemos sido el principal destino de lujo de Casablanca durante más de 40 años.",
        bookNow: "Reservar Ahora",
                // About Hero Section - Spanish
        TitleAbout: "sobre",
        AboutTextWolcome: "Bienvenido al Hotel Daoudi, donde el confort se encuentra con la elegancia. Disfrute de una estancia lujosa, servicio excepcional y momentos inolvidables en el corazón de la ciudad.",
                // Contact Hero Section - Spanish
        contactHeroTitle: "Ponte En Contacto Con Nosotros",
        contactHeroText: "Estamos aquí para ayudarte con cualquier consulta sobre nuestros alojamientos y servicios de lujo. Contáctanos a través de cualquiera de los siguientes canales.",
        
        // Contact Information Section - Spanish
        contactInfoTitle: "Información de Contacto",
        locationTitle: "Nuestra Ubicación",
        locationText: "Avenida del Lujo 123, Distrito Prestigio Ciudad, País 12345",
        phoneTitle: "Número de Teléfono",
        phoneText: "+1 (234) 567-8900 +1 (234) 567-8901",
        emailTitle: "Dirección de Email",
        emailText: "info@luxuryhotel.com reservations@luxuryhotel.com", 
        hoursTitle: "Horario de Atención",
        hoursText: "Recepción: 24/7 Restaurante: 7:00 AM - 11:00 PM Spa: 9:00 AM - 9:00 PM",
        
        // Contact Form Section - Spanish
        contactFormTitle: "Envíanos un Mensaje",
        nameLabel: "Nombre Completo",
        namePlaceholder: "Tu Nombre",
        emailLabel: "Dirección de Email",
        emailPlaceholder: "Tu Email", 
        phoneLabel: "Número de Teléfono",
        phonePlaceholder: "Tu Teléfono",
        subjectLabel: "Asunto",
        subjectPlaceholder: "Asunto del Mensaje",
        messageLabel: "Tu Mensaje",
        messagePlaceholder: "¿Cómo podemos ayudarte?",
        submitButton: "Enviar Mensaje",
        // alería
        TitleGallery: "Galería Nuestra", 
        TextGallrey: "Descubre la belleza y elegancia de nuestro hotel de lujo a través de nuestra colección de fotos",
        // Rooms page
        RoomsHoreTitle: "Palacio de Lujo Habitaciones",
        RoomsHoreText: "encuentre aquí las mejores habitaciones, servicios excepcionales para una estancia inolvidable",
                // serivese page
        servicesTitle: "Nuestros Servicios",
        poolTitle: "Piscina Infinita",
        "restaurantTitle": "Restaurante Gourmet",
        "spaTitle": "Spa de Lujo",
        "gymTitle": "Centro de Fitness",
        "conciergeTitle": "Conserjería 24/7",
        "exploreBtn": "Explorar",
        "discoverBtn": "Descubrir",
        "relaxBtn": "Relajarse",
        "energizeBtn": "Energía",
        "requestBtn": "Solicitar",
        "whatsappText": "Chatea con nosotros",
        // Room page
        "roomsTitle": "rooms",
        "holidaySubtitle": "enjoy your holiday in Moroccan",
        "roomTitle": "Deluxe Ocean View Suite",
        "roomLocation": "Malibu, California",
        "ratingText": "4.7 (128 reviews)",
        "roomDetailsTitle": "Room Details",
        "roomDescription": "Experience unparalleled luxury in our Deluxe Ocean View Suite. This spacious 65m² suite features floor-to-ceiling windows offering breathtaking views of the Pacific Ocean, a king-sized bed with premium linens, and a separate living area with designer furnishings.",
        "specificationsTitle": "Specifications",
        "sizeDetail": "65 m² / 700 ft²",
        "bedDetail": "1 King Bed",
        "occupancyDetail": "Max Occupancy: 3 Guests",
        "wifiDetail": "Free High-Speed WiFi",
        "beachDetail": "Private Beach Access",
        "breakfastDetail": "Breakfast Included",
        "amenitiesTitle": "Room Amenities",
        "coffeeAmenity": "Nespresso Machine",
        "tvAmenity": "55\" Smart TV",
        "acAmenity": "Air Conditioning",
        "minibarAmenity": "Minibar",
        "tubAmenity": "Deep Soaking Tub",
        "beachEssentialsAmenity": "Beach Essentials",
        "safeAmenity": "In-room Safe",
        "robesAmenity": "Robes & Slippers",
        "chargingAmenity": "USB Charging Stations",
        "commentsTitle": "Guest Comments (3)",
        "comment1": "We stayed in one of these new suites last weekend, and the experience was absolutely incredible! The attention to detail and the stunning ocean views made our anniversary celebration truly special.",
        "comment2": "The marble bathroom alone is worth the upgrade! I've never experienced such luxury in a hotel room. The panoramic views of the ocean from the balcony are breathtaking, especially at sunrise.",
        "comment3": "As a frequent traveler, I've stayed in many luxury hotels around the world, but these new suites are truly exceptional. The combination of elegant design, premium amenities, and stunning location is unmatched.",
        "replyBtn": "Reply",
        "leaveCommentTitle": "Leave a Comment",
        "nameLabel": "Name",
        "emailLabel": "Email",
        "commentLabel": "Comment",
        "postCommentBtn": "Post Comment",
        "bookTitle": "Book Your Stay",
        "checkInLabel": "Check In",
        "checkOutLabel": "Check Out",
        "adultsLabel": "Adults",
        "childrenLabel": "Children",
        "roomsLabel": "Rooms",
        "onePerson": "1 Person",
        "twoPeople": "2 People",
        "threePeople": "3 People",
        "fourPeople": "4 People",
        "noChildren": "No Children",
        "oneChild": "1 Child",
        "twoChildren": "2 Children",
        "oneRoom": "1 Room",
        "twoRooms": "2 Rooms",
        "threeRooms": "3 Rooms",
        "extraServicesTitle": "Extra Services",
        "roomCleaningLabel": "Room Cleaning",
        "roomCleaningPrice": "$12 / Night",
        "parkingLabel": "Parking",
        "parkingPrice": "Free",
        "transportLabel": "Airport Transport",
        "transportPrice": "$30 / Night",
        "petFriendlyLabel": "Pet-Friendly",
        "petFriendlyPrice": "$40 / Night",
        "nightsPrice": "2 Nights",
        "parkingPriceSummary": "Parking",
        "freePrice": "Free",
        "totalPrice": "Total Price",
        "bookNowBtn": "Book Now",
        "reviewsTitle": "Reviews",
        "reviewsDescription": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
        "comfortRating": "Comfort",
        "facilitiesRating": "Facilities",
        "locationRating": "Location",
        "priceRating": "Price",
         // Room page
        "roomsTitle": "habitaciones",
        "holidaySubtitle": "disfruta tus vacaciones en Marruecos",
        "roomTitle": "Suite Deluxe con Vista al Océano",
        "roomLocation": "Malibu, California",
        "ratingText": "4.7 (128 reseñas)",
        "roomDetailsTitle": "Detalles de la Habitación",
        "roomDescription": "Experimente un lujo inigualable en nuestra Suite Deluxe con vista al océano. Esta espaciosa suite de 65m² cuenta con ventanales que ofrecen vistas impresionantes del Océano Pacífico, una cama king-size con sábanas premium y una zona de estar separada con muebles de diseñador.",
        "specificationsTitle": "Especificaciones",
        "sizeDetail": "65 m² / 700 pies²",
        "bedDetail": "1 Cama King Size",
        "occupancyDetail": "Ocupación máxima: 3 Huéspedes",
        "wifiDetail": "WiFi Gratuito de Alta Velocidad",
        "beachDetail": "Acceso Privado a la Playa",
        "breakfastDetail": "Desayuno Incluido",
        "amenitiesTitle": "Comodidades de la Habitación",
        "coffeeAmenity": "Máquina Nespresso",
        "tvAmenity": "TV Inteligente 55\"",
        "acAmenity": "Aire Acondicionado",
        "minibarAmenity": "Minibar",
        "tubAmenity": "Bañera Profunda",
        "beachEssentialsAmenity": "Esenciales de Playa",
        "safeAmenity": "Caja Fuerte",
        "robesAmenity": "Albornoces y Zapatillas",
        "chargingAmenity": "Estaciones de Carga USB",
        "commentsTitle": "Comentarios de Huéspedes (3)",
        "comment1": "Nos alojamos en una de estas nuevas suites el fin de semana pasado, ¡y la experiencia fue absolutamente increíble! La atención al detalle y las impresionantes vistas al océano hicieron que nuestra celebración de aniversario fuera realmente especial.",
        "comment2": "¡Solo el baño de mármol vale la pena la actualización! Nunca había experimentado tanto lujo en una habitación de hotel. Las vistas panorámicas del océano desde el balcón son impresionantes, especialmente al amanecer.",
        "comment3": "Como viajero frecuente, me he alojado en muchos hoteles de lujo alrededor del mundo, pero estas nuevas suites son verdaderamente excepcionales. La combinación de diseño elegante, comodidades premium y ubicación impresionante es inigualable.",
        "replyBtn": "Responder",
        "leaveCommentTitle": "Dejar un Comentario",
        "nameLabel": "Nombre",
        "emailLabel": "Correo Electrónico",
        "commentLabel": "Comentario",
        "postCommentBtn": "Publicar Comentario",
        "bookTitle": "Reservar tu Estancia",
        "checkInLabel": "Check In",
        "checkOutLabel": "Check Out",
        "adultsLabel": "Adultos",
        "childrenLabel": "Niños",
        "roomsLabel": "Habitaciones",
        "onePerson": "1 Persona",
        "twoPeople": "2 Personas",
        "threePeople": "3 Personas",
        "fourPeople": "4 Personas",
        "noChildren": "Sin Niños",
        "oneChild": "1 Niño",
        "twoChildren": "2 Niños",
        "oneRoom": "1 Habitación",
        "twoRooms": "2 Habitaciones",
        "threeRooms": "3 Habitaciones",
        "extraServicesTitle": "Servicios Extra",
        "roomCleaningLabel": "Limpieza de Habitación",
        "roomCleaningPrice": "$12 / Noche",
        "parkingLabel": "Estacionamiento",
        "parkingPrice": "Gratis",
        "transportLabel": "Transporte al Aeropuerto",
        "transportPrice": "$30 / Noche",
        "petFriendlyLabel": "Mascotas Permitidas",
        "petFriendlyPrice": "$40 / Noche",
        "nightsPrice": "2 Noches",
        "parkingPriceSummary": "Estacionamiento",
        "freePrice": "Gratis",
        "totalPrice": "Precio Total",
        "bookNowBtn": "Reservar Ahora",
        "reviewsTitle": "Reseñas",
        "reviewsDescription": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
        "comfortRating": "Comodidad",
        "facilitiesRating": "Instalaciones",
        "locationRating": "Ubicación",
        "priceRating": "Precio"

        },
        fr: {
            // Navigation & Header
            hotelName: "Palais de Luxe",
            home: "Accueil",
            rooms: "Chambres et Suites",
            dining: "Restaurant",
            spa: "Spa et Bien-être",
            gallery: "Galerie",
            contact: "Contact",
            login: "Connexion",
            bookNow: "Réserver Maintenant",
            
            // Hero Section
            welcomeTitle: "Bienvenue à l'Hôtel de Luxe ♕",
            welcomeSubtitle: "Une expérience hôtelière de luxe qui allie confort",
            welcomeDescription: "Profitez d'un séjour inoubliable avec des vues à couper le souffle, des chambres élégantes et des services personnalisés conçus pour rendre chaque moment spécial. Nous sommes là pour vous assurer que votre voyage est rempli de confort et de luxe",
            chatWithUs: "Discutez avec nous",
            
            // About Section
            aboutUs: "À Propos de Nous",
            us: "Nous",
            aboutSubtitle: "Plus de 10 ans de confort et de luxe",
            welcome: "Bienvenue",
            toHotel: "à l'Hôtel Golden Star",
            luxuryComfort: "Où le Luxe Rencontre le Confort",
            aboutDescription1: "Fondé en 1990, notre hôtel a été un phare de sophistication et de service impeccable. Ce qui a commencé comme un petit établissement boutique est devenu l'une des adresses les plus prestigieuses de la ville, sans jamais perdre notre touche personnelle.",
            aboutDescription2: "Chaque coin de notre hôtel raconte une histoire - des meubles faits à main à la collection d'art soigneusement sélectionnée. Nous croyons que le vrai luxe réside dans les détails et dans la création d'expériences mémorables pour nos clients.",
            feature1: "Présenter les meilleures réservations d'hôtel et leurs services",
            feature2: "Déclaration de mission de réservation ou hôtel de luxe",
            feature3: "Mettre en avant les fonctionnalités du projet de réservation",
            readMore: "Lire plus",
            
            // Stats
            yearsOf: "Années D'",
            experience: "Expérience",
            online: "En Ligne",
            booking: "Réservation",
            experienced: "Expérimenté",
            bellboy: "Groom",
            bestHotel: "Meilleur Hôtel",
            award: "Prix",
            
            // Rooms Section
            ourRooms: "Nos Chambres",
            roomsSubtitle: "Choisissez parmi notre sélection exquise d'hébergements",
            deluxeRoom: "Chambre Deluxe",
            deluxeDescription: "Chambre spacieuse avec équipements premium et vues imprenables sur la ville",
            kingBed: "Lit King",
            guests: "2 Invités",
            night: "nuit",
            executiveSuite: "Suite Exécutive",
            executiveDescription: "Suite luxueuse avec salon séparé et services premium",
            presidentialSuite: "Suite Présidentielle",
            presidentialDescription: "L'ultime en luxe avec vues panoramiques et équipements exclusifs",
            
            // Services Section
            ourServices: "Nos Services",
            services: "Services",
            servicesSubtitle: "Équipements exceptionnels pour un séjour inoubliable",
            gourmetDining: "Restaurant Gastronomique",
            gourmetDescription: "Découvrez une cuisine de classe mondiale dans nos restaurants primés",
            spaWellness: "Spa et Bien-être",
            spaDescription: "Régénérez-vous avec nos traitements de spa luxueux et installations",
            infinityPool: "Piscine à Débordement",
            poolDescription: "Détendez-vous près de notre magnifique piscine à débordement avec vues panoramiques",
            concierge: "Conciergerie 24/7",
            conciergeDescription: "Notre personnel dédié est disponible 24 heures sur 24 pour vous aider",
            highSpeedWifi: "WiFi Haut Débit",
            wifiDescription: "Restez connecté avec notre internet haut débit gratuit",
            valetParking: "Service de Voiturier",
            parkingDescription: "Service de voiturier gratuit pour tous nos clients",
            
            // About Services
            theRestaurant: "Le Restaurant",
            restaurantDescription: "Régalez vos sens avec des plats exquis préparés par nos chefs talentueux. Notre restaurant allie saveurs internationales et produits locaux, pour une expérience culinaire inoubliable dans une ambiance élégante et chaleureuse.",
            theSpa: "Le Spa",
            spaDescription2: "Régénérez votre corps et votre esprit dans notre spa de luxe. Des massages apaisants aux soins revitalisants, chaque détail est pensé pour vous offrir une détente totale et une harmonie intérieure.",
            thePool: "La Piscine",
            poolDescription2: "Plongez dans la tranquillité. Entourée de paysages verdoyants et d’une ambiance paisible, notre piscine à débordement est l’endroit idéal pour se détendre, siroter votre boisson préférée et profiter du soleil.",
            bookingNow: "Réserver maintenant",
            
            // Why Choose Us
            whyChoose: "Pourquoi Nous Choisir",
            chooseUs: "Nous Choisir",
            whyChooseSubtitle: "choisissez les meilleurs services de confort et de luxe",
            whyChooseGoal: "Notre objectif est d'assurer l'accessibilité de la réservation d'hôtel.",
            whyChooseDescription: "Hôtelier d'une manière puissante de pas seulement des professions, cependant, dans une passion pour notre Compagnie. Nous avons tendance à croire à l'idée que l'apparence soignée de tout site web.",
            projectDone: "Projet Réalisé",
            happyClients: "Clients Heureux",
            serviceDone: "Service Réalisé",
            
            // Restaurant Section
            culinaryExcellence: "Excellence Culinaire",
            epicureanDelights: "Délices Épicuriens",
            fineDining: "Expérience Gastronomique",
            restaurantSubtitle: "Plongez dans un voyage culinaire exquis où les techniques traditionnelles rencontrent des saveurs innovantes. Nos chefs maîtres créent chaque plat avec passion, en utilisant uniquement les meilleurs ingrédients de saison.",
            seasonalMenu: "Menu de Saison",
            seasonalDescription: "Ingrédients frais sélectionnés quotidiennement",
            sommelierSelection: "Sélection du Sommelier",
            sommelierDescription: "Vins assortis par des experts",
            awardWinning: "Prix",
            awardDescription: "Cuisine reconnue par Michelin",
            reserveTable: "Réserver une Table",
            viewMenu: "Voir le Menu",
            gourmetAppetizers: "Apéritifs Gastronomiques",
            exquisiteEntrees: "Plats Principaux Exquis",
            restaurantTestimonial: "\"Une expérience culinaire inoubliable. Chaque plat était un chef-d'œuvre et le service était impeccable. L'assortiment des vins a élevé l'ensemble du repas à un autre niveau.\"",
            foodCritic: "Critique Culinaire",
            signatureDishes: "Plats Signature",
            chefSelection: "Sélection du Chef",
            truffleRisotto: "Risotto aux Truffes",
            truffleDescription: "Riz Arborio avec truffe noire et parmesan",
            wagyuBeef: "Filet de Bœuf Wagyu",
            wagyuDescription: "Avec légumes rôtis et réduction de vin rouge",
            atlanticLobster: "Homard de l'Atlantique",
            lobsterDescription: "Poché au beurre avec sauce au safran",
            chocolateSouffle: "Soufflé au Chocolat",
            souffleDescription: "Avec glace à la vanille",
            
            // Gallery Section
            hotelGallery: "Galerie de l'Hôtel Jim",
            gallerySubtitle: "Explorez les équipements luxueux et les vues à couper le souffle de l'Hôtel Jim à travers notre collection de photos",
            grandEntrance: "Entrée Principale",
            entranceDescription: "La façade impressionnante de l'Hôtel Jim au coucher du soleil",
            presidentialSuite: "Suite Présidentielle",
            suiteDescription: "Notre hébergement le plus luxueux",
            infinityPool: "Piscine à Débordement",
            poolDescription3: "Détendez-vous avec des vues imprenables sur l'océan",
            gourmetRestaurant: "Restaurant Gastronomique",
            restaurantDescription2: "Expérience gastronomique étoilée Michelin",
            luxurySpa: "Spa de Luxe",
            spaDescription3: "Relaxation et rajeunissement ultimes",
            skyLounge: "Salon Céleste",
            loungeDescription: "Cocktails signature avec vues panoramiques",
            conferenceHall: "Salle de Conférence",
            conferenceDescription: "Installations de réunion de pointe",
            tropicalGardens: "Jardins Tropicaux",
            gardensDescription: "Paysages luxuriants entourant la propriété",
            
            // Booking Section
            exclusiveExperience: "Expérience Exclusive",
            eleganceRedefined: "ÉLÉGANCE REDÉFINIE",
            luxurySerenity: "Où le Luxe Rencontre la Sérénité",
            bookingSubtitle: "Plongez dans un luxe incomparable dans notre hôtel primé. Expérimentez un service de classe mondiale, des hébergements exquis et des souvenirs qui dureront toute une vie.",
            bookYourStay: "Réserver Votre Séjour",
            exploreSuites: "Explorer les Suites",
            personalConcierge: "Concierge Personnel",
            conciergeDescription2: "Service dédié pour chacun de vos besoins",
            wellnessRetreat: "Retraite Bien-être",
            wellnessDescription: "Régénérez-vous dans notre spa de classe mondiale",
            michelinDining: "Restaurant Michelin",
            michelinDescription: "Excellence culinaire par des chefs maîtres",
            
            // Testimonials
            guestTestimonials: "Témoignages des Clients",
            testimonials: "Témoignages",
            testimonialsSubtitle: "Ce que nos clients disent de nous",
            testimonial1: "Hôtel absolument magnifique avec un service exceptionnel. L'attention portée aux détails était remarquable et le personnel a fait tout son possible pour rendre notre séjour parfait.",
            testimonial2: "La suite présidentielle a dépassé nos attentes. La vue était à couper le souffle et les équipements étaient de premier ordre. Nous reviendrons certainement!",
            testimonial3: "Dès notre arrivée, nous nous sommes sentis choyés. Les traitements de spa étaient divins et les options de restauration gastronomique étaient exceptionnelles. Hautement recommandé!",
            
            // Booking Form
            bookYourStay: "Réserver Votre Séjour",
            bookingDescription: "Prêt à vivre le luxe? Vérifiez la disponibilité et réservez votre séjour parfait avec nous.",
            checkIn: "Arrivée",
            checkOut: "Départ",
            adults: "Adultes",
            children: "Enfants",
            roomType: "Type de Chambre",
            checkAvailability: "Vérifier la Disponibilité",
            
            // Contact Section
            contactUs: "Contactez-Nous",
            contactSubtitle: "Nous serions ravis d'avoir de vos nouvelles",
            yourName: "Votre Nom",
            yourEmail: "Votre Email",
            subject: "Sujet",
            yourMessage: "Votre Message",
            sendMessage: "Envoyer le Message",
            
            // Blog Section
            luxuryHotel: "Hôtel de Luxe",
            blog: "Blog",
            blogSubtitle: "Découvrez les dernières nouvelles, conseils et histoires de notre hôtel de luxe et ses environs",
            premiumSuite: "Suite Premium",
            accommodation: "Hébergement",
            blogTitle1: "Nouvelles Suites de Luxe avec Vues Imprenables sur l'Océan",
            blogDescription1: "Nos suites récemment rénovées avec vue sur l'océan offrent l'ultime en luxe et confort avec des équipements premium et des vues impressionnantes.",
            gourmet: "Gastronomique",
            blogTitle2: "Événement Exclusif de Dégustation de Vins avec Notre Maître Sommelier",
            blogDescription2: "Rejoignez-nous pour un événement exclusif de dégustation de vins mettant en vedette des millésimes rares de notre cave, parfaitement assortis à des délices gastronomiques.",
            wellness: "Bien-être",
            blogTitle3: "Nouveaux Traitements de Détente dans Notre Centre de Spa de Luxe",
            blogDescription3: "Expérimentez la détente ultime avec nos nouveaux traitements de spa conçus pour régénérer votre corps et votre esprit pendant votre séjour.",
            hotelManager: "Directeur de l'Hôtel",
            executiveChef: "Chef Exécutif",
            spaDirector: "Directrice du Spa",
            
            // Newsletter
            joinExclusive: "Rejoignez Notre Cercle Exclusif",
            newsletterDescription: "Abonnez-vous à notre newsletter premium et recevez des informations exclusives sur les voyages de luxe, des offres spéciales réservées aux membres et des recommandations personnalisées pour votre prochain voyage somptueux.",
            subscribeNow: "S'abonner Maintenant",
            vipTreatment: "Traitement VIP",
            exclusiveDiscounts: "Remises Exclusives",
            earlyAccess: "Accès Anticipé",
            specialRewards: "Récompenses Spéciales",
            welcomeLuxury: "Bienvenue dans Notre Cercle de Luxe!",
            successMessageText: "Merci de vous être abonné. Nous avons envoyé un email de confirmation avec votre cadeau de bienvenue exclusif.",
            
            // FAQ Section
            frequentlyAsked: "Foire Aux Questions",
            questions: "Questions",
            faqSubtitle: "Trouvez des réponses rapides aux questions courantes sur notre hôtel et nos services",
            faq1: "Quels sont vos horaires d'arrivée et de départ?",
            faqAnswer1: "L'heure d'arrivée est à 15h00 et le départ à 12h00. L'arrivée anticipée et le départ tardif peuvent être disponibles sur demande, sous réserve de disponibilité et de frais supplémentaires.",
            faq2: "Proposez-vous un transport depuis l'aéroport?",
            faqAnswer2: "Oui, nous proposons un service de navette aéroport gratuite pour nos clients. Veuillez nous informer des détails de votre vol au moins 24 heures à l'avance pour organiser la prise en charge.",
            faq3: "Y a-t-il un parking disponible à l'hôtel?",
            faqAnswer3: "Nous proposons des services de voiturier à 35$ par nuit. Le stationnement en libre-service est disponible dans le garage voisin à un tarif réduit pour les clients de l'hôtel.",
            faq4: "Les animaux de compagnie sont-ils autorisés à l'hôtel?",
            faqAnswer4: "Nous accueillons les animaux de compagnie jusqu'à 25 lbs avec des frais de nettoyage non remboursables de 75$ par séjour. Veuillez nous informer à l'avance si vous prévoyez d'amener votre animal.",
            faq5: "Quelles options de restauration sont disponibles?",
            faqAnswer5: "Nous avons trois restaurants: notre restaurant signature servant une cuisine internationale, un bistrot décontracté et un bar rooftop avec vue panoramique sur la ville. Le service en chambre est disponible 24h/24.",
            
            // Footer
            luxuryHaven: "Havre de Luxe",
            footerDescription: "Redéfinir l'hospitalité de luxe avec un service exceptionnel, des équipements de classe mondiale et des expériences inoubliables.",
            quickLinks: "Liens Rapides",
            eventSpaces: "Espaces Événementiels",
            transportation: "Transport",
            specialPackages: "Forfaits Spéciaux",
            newsletterFooter: "Abonnez-vous à notre newsletter pour des offres spéciales et des mises à jour.",
            allRightsReserved: "Tous Droits Réservés.",
            privacyPolicy: "Politique de Confidentialité",
            termsOfService: "Conditions d'Utilisation",
            cookiesPolicy: "Politique des Cookies",
            // Testimonials page
            Testimonialsmain: "Opiniones de Clientes",
            testimonailsPageText:"Mi negocio creció gracias a ellos.",
                        // page about - French
                    // CTA Section - French
        ctaTitle: "Vivez l'Hospitalité Majestueuse",
        ctaText: "Réservez votre séjour avec nous et découvrez pourquoi nous sommes la destination de luxe incontournable de Casablanca depuis plus de 40 ans.",
        bookNow: "Réserver Maintenant",
           // About Hero Section - French
        TitleAbout: "à propos",
        AboutTextWolcome: "Bienvenue à l'Hôtel Daoudi, où le confort rencontre l'élégance. Profitez d'un séjour luxueux, d'un service exceptionnel et de moments inoubliables au cœur de la ville.",
                // Contact Hero Section - French
        contactHeroTitle: "Entrez En Contact Avec Nous",
        contactHeroText: "Nous sommes là pour vous aider avec toutes vos questions concernant nos hébergements et services de luxe. Contactez-nous par l'un des canaux suivants.",
        
        // Contact Information Section - French
        contactInfoTitle: "Informations de Contact", 
        locationTitle: "Notre Emplacement",
        locationText: "123 Avenue du Luxe, Quartier Prestige Ville, Pays 12345",
        phoneTitle: "Numéro de Téléphone",
        phoneText: "+1 (234) 567-8900 +1 (234) 567-8901",
        emailTitle: "Adresse Email",
        emailText: "info@luxuryhotel.com reservations@luxuryhotel.com",
        hoursTitle: "Heures d'Ouverture", 
        hoursText: "Réception: 24h/24 Restaurant: 7h00 - 23h00 Spa: 9h00 - 21h00",
        
        // Contact Form Section - French
        contactFormTitle: "Envoyez-nous un Message",
        nameLabel: "Nom Complet",
        namePlaceholder: "Votre Nom",
        emailLabel: "Adresse Email",
        emailPlaceholder: "Votre Email",
        phoneLabel: "Numéro de Téléphone",
        phonePlaceholder: "Votre Téléphone",
        subjectLabel: "Sujet",
        subjectPlaceholder: "Sujet du Message", 
        messageLabel: "Votre Message",
        messagePlaceholder: "Comment pouvons-nous vous aider?",
        submitButton: "Envoyer le Message",
        // Gellery page
        TitleGallery: "Galerie Notre",
        TextGallrey: "Découvrez la beauté et l'élégance de notre hôtel de luxe à travers notre collection de photos",
        // romms page
        "RoomsHoreTitle": "Palacio de Lujo Habitaciones",
        "RoomsHoreText": "encuentre aquí las mejores habitaciones, servicios excepcionales para una estancia inolvidable",
                // services page
        "servicesTitle": "Nuestros Servicios",
        "poolTitle": "Piscina Infinita",
        "restaurantTitle": "Restaurante Gourmet",
        "spaTitle": "Spa de Lujo",
        "gymTitle": "Centro de Fitness",
        "conciergeTitle": "Conserjería 24/7",
        "exploreBtn": "Explorar",
        "discoverBtn": "Descubrir",
        "relaxBtn": "Relajarse",
        "energizeBtn": "Energía",
        "requestBtn": "Solicitar",
        "whatsappText": "Chatea con nosotros",
        // Rooms  page
                "roomsTitle": "chambres",
        "holidaySubtitle": "profitez de vos vacances au Maroc",
        "roomTitle": "Suite Deluxe avec Vue sur l'Océan",
        "roomLocation": "Malibu, Californie",
        "ratingText": "4.7 (128 avis)",
        "roomDetailsTitle": "Détails de la Chambre",
        "roomDescription": "Vivez un luxe incomparable dans notre Suite Deluxe avec vue sur l'océan. Cette suite spacieuse de 65m² dispose de baies vitrées offrant une vue imprenable sur l'océan Pacifique, un lit king-size avec des draps premium et un salon séparé avec des meubles design.",
        "specificationsTitle": "Spécifications",
        "sizeDetail": "65 m² / 700 pi²",
        "bedDetail": "1 Lit King Size",
        "occupancyDetail": "Occupation max : 3 Personnes",
        "wifiDetail": "WiFi Haut Débit Gratuit",
        "beachDetail": "Accès Privé à la Plage",
        "breakfastDetail": "Petit-déjeuner Inclus",
        "amenitiesTitle": "Équipements de la Chambre",
        "coffeeAmenity": "Machine Nespresso",
        "tvAmenity": "TV Smart 55\"",
        "acAmenity": "Climatisation",
        "minibarAmenity": "Minibar",
        "tubAmenity": "Baignoire Balnéo",
        "beachEssentialsAmenity": "Essentiels Plage",
        "safeAmenity": "Coffre-fort",
        "robesAmenity": "Peignoirs & Pantoufles",
        "chargingAmenity": "Stations de Chargement USB",
        "commentsTitle": "Commentaires des Clients (3)",
        "comment1": "Nous avons séjourné dans l'une de ces nouvelles suites le week-end dernier, et l'expérience était absolument incroyable ! L'attention aux détails et les vues magnifiques sur l'océan ont rendu notre célébration d'anniversaire vraiment spéciale.",
        "comment2": "La salle de bain en marbre seule vaut la mise à niveau ! Je n'ai jamais connu un tel luxe dans une chambre d'hôtel. Les vues panoramiques sur l'océan depuis le balcon sont à couper le souffle, surtout au lever du soleil.",
        "comment3": "En tant que voyageur fréquent, j'ai séjourné dans de nombreux hôtels de luxe dans le monde, mais ces nouvelles suites sont vraiment exceptionnelles. La combinaison de design élégant, d'équipements premium et d'un emplacement magnifique est inégalée.",
        "replyBtn": "Répondre",
        "leaveCommentTitle": "Laisser un Commentaire",
        "nameLabel": "Nom",
        "emailLabel": "Email",
        "commentLabel": "Commentaire",
        "postCommentBtn": "Publier le Commentaire",
        "bookTitle": "Réserver Votre Séjour",
        "checkInLabel": "Arrivée",
        "checkOutLabel": "Départ",
        "adultsLabel": "Adultes",
        "childrenLabel": "Enfants",
        "roomsLabel": "Chambres",
        "onePerson": "1 Personne",
        "twoPeople": "2 Personnes",
        "threePeople": "3 Personnes",
        "fourPeople": "4 Personnes",
        "noChildren": "Pas d'Enfants",
        "oneChild": "1 Enfant",
        "twoChildren": "2 Enfants",
        "oneRoom": "1 Chambre",
        "twoRooms": "2 Chambres",
        "threeRooms": "3 Chambres",
        "extraServicesTitle": "Services Supplémentaires",
        "roomCleaningLabel": "Nettoyage de Chambre",
        "roomCleaningPrice": "12€ / Nuit",
        "parkingLabel": "Parking",
        "parkingPrice": "Gratuit",
        "transportLabel": "Transport Aéroport",
        "transportPrice": "30€ / Nuit",
        "petFriendlyLabel": "Animaux Acceptés",
        "petFriendlyPrice": "40€ / Nuit",
        "nightsPrice": "2 Nuits",
        "parkingPriceSummary": "Parking",
        "freePrice": "Gratuit",
        "totalPrice": "Prix Total",
        "bookNowBtn": "Réserver Maintenant",
        "reviewsTitle": "Avis",
        "reviewsDescription": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
        "comfortRating": "Confort",
        "facilitiesRating": "Équipements",
        "locationRating": "Emplacement",
        "priceRating": "Prix"


        }
    };

// Language management
let currentLanguage = 'en';

// Initialize language system
function initLanguage() {
    console.log('Initializing language system...');
    
    // Get saved language or detect browser language
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.split('-')[0];
    
    if (savedLanguage && languages[savedLanguage]) {
        currentLanguage = savedLanguage;
        console.log('Using saved language:', currentLanguage);
    } else if (languages[browserLanguage]) {
        currentLanguage = browserLanguage;
        console.log('Using browser language:', currentLanguage);
    } else {
        console.log('Using default language: English');
    }
    
    // Wait for DOM to be fully loaded before setting up event listeners
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupLanguageButtons);
    } else {
        setupLanguageButtons();
    }
    
    updateContent();
}

// Set up language button event listeners
function setupLanguageButtons() {
    console.log('Setting up language buttons...');
    
    const languageButtons = document.querySelectorAll('.lang-btn');
    console.log('Found language buttons:', languageButtons.length);
    
    if (languageButtons.length === 0) {
        console.error('No language buttons found!');
        // Try again after a short delay in case buttons are added dynamically
        setTimeout(setupLanguageButtons, 100);
        return;
    }
    
    languageButtons.forEach(btn => {
        // Remove existing event listeners to avoid duplicates
        btn.replaceWith(btn.cloneNode(true));
    });
    
    // Re-select buttons after cloning
    const freshButtons = document.querySelectorAll('.lang-btn');
    
    freshButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.dataset.lang;
            console.log('Language button clicked:', selectedLang);
            
            if (languages[selectedLang]) {
                currentLanguage = selectedLang;
                updateLanguageButtons();
                updateContent();
                
                // Add smooth transition effect
                document.body.style.opacity = '0.8';
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 300);
            }
        });
    });
    
    updateLanguageButtons();
}

// Update active state of language buttons
function updateLanguageButtons() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Update all content with current language
function updateContent() {
    console.log('Updating content for language:', currentLanguage);
    
    // Update elements with lang data-key attribute
    const langElements = document.querySelectorAll('.lang');
    console.log('Found language elements:', langElements.length);
    
    langElements.forEach(element => {
        const key = element.dataset.key;
        if (key && languages[currentLanguage][key]) {
            element.textContent = languages[currentLanguage][key];
        } else if (key) {
            console.warn('Missing translation for key:', key, 'in language:', currentLanguage);
        }
    });

    // Update placeholder texts
    const placeholderElements = document.querySelectorAll('.lang-placeholder');
    placeholderElements.forEach(element => {
        const key = element.dataset.key;
        if (key && languages[currentLanguage][key]) {
            element.placeholder = languages[currentLanguage][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;

    // Save preference
    localStorage.setItem('preferredLanguage', currentLanguage);
    
    console.log('Content update complete');
}

// Add debug function to check for elements
function debugLanguageSystem() {
    console.log('=== LANGUAGE SYSTEM DEBUG ===');
    console.log('Current language:', currentLanguage);
    console.log('Language buttons found:', document.querySelectorAll('.lang-btn').length);
    console.log('Language elements found:', document.querySelectorAll('.lang').length);
    console.log('Placeholder elements found:', document.querySelectorAll('.lang-placeholder').length);
    console.log('=============================');
}

// Initialize when script loads
initLanguage();

// Export for global access if needed
window.languageManager = {
    setLanguage: function(lang) {
        if (languages[lang]) {
            currentLanguage = lang;
            updateLanguageButtons();
            updateContent();
        }
    },
    getCurrentLanguage: function() {
        return currentLanguage;
    },
    debug: debugLanguageSystem
};



// Make sure the script runs after full page load
window.addEventListener('load', function() {
    console.log('Page fully loaded, finalizing language setup...');
    setupLanguageButtons();
    debugLanguageSystem();
});
// Debug script to check if language buttons exist
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - checking for language buttons...');
    const buttons = document.querySelectorAll('.lang-btn');
    console.log('Language buttons:', buttons);
    
    // Force language initialization after a delay
    setTimeout(() => {
        if (typeof languageManager !== 'undefined') {
            languageManager.debug();
        }
    }, 1000);
});