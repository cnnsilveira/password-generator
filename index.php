<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Password Generator</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="content-box">
            <div class="main-container">
                <div></div>
                <div class="title-wrap">
                    <h3>Generate a <br><span style="color: #4ADF86;">random password</span></h3>
                    <p>Never use an insecure password again.</p>
                </div>
                <div class="content-wrap">
                    <div class="checkbox-wrap">
                        <div>
                            <input type="checkbox" id="numbers" name="numbers" checked>
                            <label for="numbers">Numbers</label>
                        </div>
                        <div>
                            <input type="checkbox" id="symbols" name="symbols" checked>
                            <label for="symbols">Symbols</label>
                        </div>
                    </div>
                    <div class="length-wrap">
                        <input type="number" min="1" max="20" value="8" name="length" id="length">
                        <select name="length" id="length">
                            <?php
                            
                            for ($i = 8; $i >= 20; $i++) {
                                echo '<option value="'.$i.'">'.$i.'</option>';
                            }

                            ?>
                        </select>
                        <label for="length">Password Length</label>
                    </div>
                    <div class="btn-wrap">
                        <button id="pw-btn" onclick="generatePw()">Generate passwords</button>
                    </div>
                    <div class="pw-wrap">
                        <div id="first-pw" class="pw-div" onclick="copyOnClick(firstPw)"></div>
                        <div id="second-pw" class="pw-div" onclick="copyOnClick(secondPw)"></div>
                    </div>
                    <div class="last-wrap">
                        <p class="copy-text"></p>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/main.js"></script>
    </body>
</html>