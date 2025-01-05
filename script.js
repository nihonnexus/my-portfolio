                        < !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Portfolio</title>
                    <link rel="stylesheet" href="style.css">
                    </head>
                    <body>
                        <header>
                            <nav>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </header>

                        <section id="home">
                            <h1>Welcome to My Portfolio</h1>
                            <p>This is where I showcase my work and skills.</p>
                        </section>

                        <section id="about">
                            <h2>About Me</h2>
                            <p>Hi! I'm [Your Name], a web developer passionate about creating stunning websites and applications.</p>
                        </section>

                        <section id="portfolio">
                            <h2>Portfolio</h2>
                            <div class="project">
                                <h3>Project 1</h3>
                                <p>Brief description of Project 1.</p>
                            </div>
                            <div class="project">
                                <h3>Project 2</h3>
                                <p>Brief description of Project 2.</p>
                            </div>
                        </section>

                        <section id="contact">
                            <h2>Contact</h2>
                            <form>
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name" required>

                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="email" required>

                                        <label for="message">Message:</label>
                                        <textarea id="message" name="message" rows="4" required></textarea>

                                        <button type="submit">Send</button>
                                    </form>
                                </section>

                                <footer>
                                    <p>&copy; 2025 [Your Name]. All rights reserved.</p>
                                </footer>

                                <button id="backToTopBtn" style="display:none; position:fixed; bottom:20px; right:20px; padding:10px 20px; font-size:16px; background-color:#007BFF; color:white; border:none; border-radius:5px; cursor:pointer;">⬆️ Top</button>

                                <script>
                                    const backToTopButton = document.getElementById('backToTopBtn');

                                    window.onscroll = function() {
                                    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                                        backToTopButton.style.display = 'block';
                                    } else {
                                        backToTopButton.style.display = 'none';
                                    }
                                };

                                    backToTopButton.onclick = function() {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                };
                                </script>
                            </body>
                        </html>
