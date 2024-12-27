<div class="form-container">
    <div class="form-title">
        <h1>CALCULEZ VOTRE <span>PRIME</span></h1>
        <div class="underline"></div>
    </div>

    <form id="energyForm">
        <!-- Step 1 -->
        <div class="form-step active" data-step="1">
            <div class="question-group">
                <h3>Quel est votre type de chauffage actuel ?*</h3>
                <div class="radio-group">
                    <div class="radio-option">
                        <input type="radio" id="fioul" name="heatingType" value="fioul">
                        <label for="fioul">Fioul</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="gaz" name="heatingType" value="gaz">
                        <label for="gaz">Gaz</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="electrique" name="heatingType" value="electrique">
                        <label for="electrique">Électrique</label>
                    </div>
                </div>
            </div>

            <div class="question-group">
                <h3>Quel est votre revenu fiscal de référence ?*</h3>
                <div class="radio-group">
                    <div class="radio-option">
                        <input type="radio" id="income1" name="income" value="0-15250">
                        <label for="income1">0 € - 15 250 €</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="income2" name="income" value="15251-30000">
                        <label for="income2">15 251 € - 30 000 €</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="income3" name="income" value="30000+">
                        <label for="income3">Plus de 30 000 €</label>
                    </div>
                </div>
            </div>

            <div class="question-group">
                <h3>Combien de personnes composent votre foyer ?*</h3>
                <div class="radio-group">
                    <?php for($i = 1; $i <= 5; $i++): ?>
                        <div class="radio-option">
                            <input type="radio" id="people<?php echo $i; ?>" name="householdSize" value="<?php echo $i; ?>">
                            <label for="people<?php echo $i; ?>"><?php echo $i; ?></label>
                        </div>
                    <?php endfor; ?>
                    <div class="radio-option">
                        <input type="radio" id="people6plus" name="householdSize" value="6+">
                        <label for="people6plus">Plus de 5</label>
                    </div>
                </div>
            </div>

            <div class="question-group">
                <h3>Êtes-vous propriétaire de votre logement ?*</h3>
                <div class="radio-group">
                    <div class="radio-option">
                        <input type="radio" id="owner-yes" name="isOwner" value="oui">
                        <label for="owner-yes">Oui</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="owner-no" name="isOwner" value="non">
                        <label for="owner-no">Non</label>
                    </div>
                </div>
            </div>

            <div class="question-group">
                <h3>Nom et Prénom*</h3>
                <input type="text" name="fullName" class="form-input" required>
                
                <h3>Email*</h3>
                <input type="email" name="email" class="form-input" required>
                
                <h3>Code Postal*</h3>
                <input type="text" name="postalCode" class="form-input" required>
                
                <h3>Téléphone*</h3>
                <input type="tel" name="phone" class="form-input" required>
            </div>

            <div class="consent-checkbox">
                <label>
                    <input type="checkbox" name="consent" required>
                    En soumettant cette demande, vous acceptez d'être contacté par téléphone et de recevoir des emails...
                </label>
            </div>

            <button type="submit" class="submit-button">
                Calculer Mes Aides
            </button>
        </div>
    </form>
</div>