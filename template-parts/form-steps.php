<div class="form-container">
    <div class="progress-bar">
        <div class="step-indicator active">1</div>
        <div class="step-line"></div>
        <div class="step-indicator">2</div>
        <div class="step-line"></div>
        <div class="step-indicator">3</div>
        <div class="step-line"></div>
        <div class="step-indicator">4</div>
        <div class="step-line"></div>
        <div class="step-indicator">5</div>
    </div>

    <form id="energyForm">
        <!-- Step 1 -->
        <div class="form-step active" data-step="1">
            <h3>Seleccione el tipo de cliente:</h3>
            <label class="form-option">
                <div class="option-letter">A</div>
                <input type="radio" name="clientType" value="particular"> Particular
            </label>
            <label class="form-option">
                <div class="option-letter">B</div>
                <input type="radio" name="clientType" value="autonomo"> Autónomo / Pyme
            </label>
        </div>

        <!-- Step 2 -->
        <div class="form-step" data-step="2">
            <h3>¿Qué tipo de vivienda tienes?</h3>
            <label class="form-option">
                <div class="option-letter">A</div>
                <input type="radio" name="houseType" value="apartamento"> Apartamento o casa pequeña
            </label>
            <label class="form-option">
                <div class="option-letter">B</div>
                <input type="radio" name="houseType" value="casa"> Casa grande o chale
            </label>
            <label class="form-option">
                <div class="option-letter">C</div>
                <input type="radio" name="houseType" value="otro"> Otro tipo de vivienda
            </label>
        </div>

        <!-- Step 3 -->
        <div class="form-step" data-step="3">
            <h3>¿Cuál es tu compañía actual?</h3>
            <label class="form-option">
                <div class="option-letter">A</div>
                <input type="radio" name="currentCompany" value="gana"> Gana Energia
            </label>
            <label class="form-option">
                <div class="option-letter">B</div>
                <input type="radio" name="currentCompany" value="repsol"> Repsol
            </label>
            <label class="form-option">
                <div class="option-letter">C</div>
                <input type="radio" name="currentCompany" value="iberdrola"> Iberdrola
            </label>
            <label class="form-option">
                <div class="option-letter">D</div>
                <input type="radio" name="currentCompany" value="eniplenitude"> Eniplenitude
            </label>
            <label class="form-option">
                <div class="option-letter">E</div>
                <input type="radio" name="currentCompany" value="endesa"> Endesa
            </label>
            <label class="form-option">
                <div class="option-letter">F</div>
                <input type="radio" name="currentCompany" value="otro"> Otro/No lo sé
            </label>
        </div>

        <!-- Step 4 -->
        <div class="form-step" data-step="4">
            <h3>¿Cuál es el monto de tu factura mensual actual?</h3>
            <label class="form-option">
                <div class="option-letter">A</div>
                <input type="radio" name="monthlyBill" value="menos-50"> Menos de 50 € al mes
            </label>
            <label class="form-option">
                <div class="option-letter">B</div>
                <input type="radio" name="monthlyBill" value="50-100"> Entre 50 € y 100 € al mes
            </label>
            <label class="form-option">
                <div class="option-letter">C</div>
                <input type="radio" name="monthlyBill" value="100-150"> Entre 100 € y 150 € al mes
            </label>
            <label class="form-option">
                <div class="option-letter">D</div>
                <input type="radio" name="monthlyBill" value="mas-150"> Más de 150 € al mes
            </label>
            <label class="form-option">
                <div class="option-letter">E</div>
                <input type="radio" name="monthlyBill" value="no-se"> No lo sé
            </label>
        </div>

        <!-- Step 5 -->
        <div class="form-step" data-step="5">
            <h3>Información de contacto</h3>
            <input type="text" name="postalCode" class="form-input" placeholder="Código postal" required>
            <input type="text" name="city" class="form-input" placeholder="Ciudad" required>
            <input type="text" name="fullName" class="form-input" placeholder="Nombre completo" required>
            <input type="email" name="email" class="form-input" placeholder="Email" required>
            <input type="tel" name="phone" class="form-input" placeholder="+34XXXXXXXXX" required>
            
            <label style="display: block; margin-bottom: 20px;">
                <input type="checkbox" name="gdprConsent" required>
                Al hacer clic en «Enviar», confirmo que he leído y acepto las 
                <a href="https://comparadorluzgas.com/gaz-y-luz-condiciones-generales/" target="_blank">condiciones generales de uso</a>.
            </label>
            
            <button type="submit" class="submit-button">
                Enviar
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
            </button>
        </div>
    </form>
</div>