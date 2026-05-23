import re

gates_html = """
        <!-- INDUSTRIAL GATES SECTION -->
        <section class="section-padding tonal-layer" style="background-color: var(--color-surface-lowest); border-top: 1px solid var(--color-outline-variant);">
            <div class="container">
                <div class="section-header" style="text-align: center; margin-bottom: 64px;">
                    <span class="text-label-sm" style="color: var(--color-secondary);">NEW CATEGORY</span>
                    <h2 class="text-headline-md" style="margin: 0 auto;">Industrial Gates</h2>
                    <p class="text-body-md" style="max-width: 600px; margin: 12px auto 0;">
                        Premium, high-performance industrial gate solutions engineered for secure, rapid, and heavy-duty factory access.
                    </p>
                </div>
                
                <div class="services-grid" style="margin-bottom: 56px;">
                    <!-- Gate 1: Sliding Gates -->
                    <div class="service-card stainless-border">
                        <div class="service-img-wrapper">
                            <img alt="Industrial Sliding Gate" class="service-img" src="industrial_sliding_gate.png">
                        </div>
                        <div class="service-body">
                            <h3 class="text-title-lg">Industrial Sliding Gates</h3>
                            <p class="text-body-sm">Heavy-duty motorized sliding gates built for secure and smooth industrial facility access.</p>
                            <div class="service-actions">
                                <button class="btn-card-details" onclick="openProductModal('sliding-gates')">DETAILS</button>
                                <button class="btn-card-quote" onclick="requestServiceQuote('sliding-gates')">GET QUOTE</button>
                            </div>
                        </div>
                    </div>

                    <!-- Gate 2: Telescopic Gates -->
                    <div class="service-card stainless-border">
                        <div class="service-img-wrapper">
                            <img alt="Telescopic Gate" class="service-img" src="industrial_telescopic_gate.png">
                        </div>
                        <div class="service-body">
                            <h3 class="text-title-lg">Telescopic Gates</h3>
                            <p class="text-body-sm">Space-saving telescopic gates providing high-speed access for wide entrances with limited backspace.</p>
                            <div class="service-actions">
                                <button class="btn-card-details" onclick="openProductModal('telescopic-gates')">DETAILS</button>
                                <button class="btn-card-quote" onclick="requestServiceQuote('telescopic-gates')">GET QUOTE</button>
                            </div>
                        </div>
                    </div>

                    <!-- Gate 3: High-Speed Shutters -->
                    <div class="service-card stainless-border">
                        <div class="service-img-wrapper">
                            <img alt="High-Speed Roller Shutter" class="service-img" src="high_speed_shutter.png">
                        </div>
                        <div class="service-body">
                            <h3 class="text-title-lg">High-Speed Shutters</h3>
                            <p class="text-body-sm">Rapid-roll high-speed shutter doors designed for efficient temperature control and frequent traffic.</p>
                            <div class="service-actions">
                                <button class="btn-card-details" onclick="openProductModal('high-speed-shutters')">DETAILS</button>
                                <button class="btn-card-quote" onclick="requestServiceQuote('high-speed-shutters')">GET QUOTE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

index_content = index_content.replace('<!-- CTA PANEL SECTION -->', gates_html + '\n        <!-- CTA PANEL SECTION -->')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(index_content)

# Update services.html
with open('services.html', 'r', encoding='utf-8') as f:
    services_content = f.read()

services_content = services_content.replace('</main>', gates_html + '\n    </main>')

with open('services.html', 'w', encoding='utf-8') as f:
    f.write(services_content)
