import "../../css/signup.css";
import { GrClose } from "react-icons/gr";

function Signup({setSignupOpen}) {
  const closeSignup = () => {
    setSignupOpen(false);
  };

  function checkSelectAll() {
    const checkboxes = document.querySelectorAll('input[name="agreement"]');
    const checked = document.querySelectorAll('input[name="agreement"]:checked');
    const selectAll = document.querySelector('input[name="selectall"]');
  
    if (checkboxes.length === checked.length) {
      selectAll.checked = true;
    } else {
      selectAll.checked = false;
    }
  }
  
  // function selectAll() {
  //   const checkboxes = document.getElementsByName("agreement");
  
  //   checkboxes.forEach((checkbox) => {
  //     checkbox.checked = selectAll.checked;
  //   });
  // }
  
  return (
    <div>
      <div className="signup-popup-background">
        <div className="signup-popup">
          <div className="signup-head">
            <span>회원가입</span>
            <GrClose onClick={closeSignup} id="closeIcon" size={20}/>
          </div>
          <div className="signup-content">
            <div className="signup-input">
              <p className="input-name">이름</p>
              <input className="input-box" type="name" id="name" placeholder="이름을 입력해 주세요." />
              <small id="nameCheck"></small>
            </div>
            <div className="signup-input">
              <p className="input-number">휴대폰 번호</p>
              <select id="countryNumber">
                <option value="+82">+82 South Korea</option>
                <option value="+81">+81 Japan</option>
                <option value="+886">+886 Taiwan</option>
                <option value="+852">+852 Hong Kong</option>
                <option value="+65">+65 Singapore</option>
                <option value="+93">+93 Afghanistan</option>
                <option value="+355">+355 Albania</option>
                <option value="+213">+213 Algeria</option>
                <option value="+244">+244 Angola</option>
                <option value="+54">+54 Argentina</option>
                <option value="+374">+374 Armenia</option>
                <option value="+297">+297 Aruba</option>
                <option value="+61">+61 Australia</option>
                <option value="+43">+43 Austria</option>
                <option value="+994">+994 Azerbaijan</option>
                <option value="+973">+973 Bahrain</option>
                <option value="+880">+880 Bangladesh</option>
                <option value="+375">+375 Belarus</option>
                <option value="+32">+32 Belgium</option>
                <option value="+501">+501 Belize</option>
                <option value="+229">+229 Benin</option>
                <option value="+975">+975 Bhutan</option>
                <option value="+591">+591 Bolivia</option>
                <option value="+267">+267 Botswana</option>
                <option value="+55">+55 Brazil</option>
                <option value="+673">+673 Brunei</option>
                <option value="+359">+359 Bulgaria</option>
                <option value="+226">+226 Burkina Faso</option>
                <option value="+855">+855 Cambodia</option>
                <option value="+237">+237 Cameroon</option>
                <option value=" +1">+1 Canada</option>
                <option value="+56">+56 Chile</option>
                <option value="+86">+86 China</option>
                <option value="+61">+61 Christmas Island</option>
                <option value="+61">+61 Cocos Islands</option>
                <option value="+57">+57 Colombia</option>
                <option value="+269">+269 Comoros</option>
                <option value="+506">+506 Costa Rica</option>
                <option value="+385">+385 Croatia</option>
                <option value="+53">+53 Cuba</option>
                <option value="+599">+599 Curacao</option>
                <option value="+357">+357 Cyprus</option>
                <option value="+420">+420 Czech Republic</option>
                <option value="+45">+45 Denmark</option>
                <option value="+253">+253 Djibouti</option>
                <option value="+593">+593 Ecuador</option>
                <option value="+20">+20 Egypt</option>
                <option value="+503">+503 El Salvador</option>
                <option value="+240">+240 Equatorial Guinea</option>
                <option value="+372">+372 Estonia</option>
                <option value="+251">+251 Ethiopia</option>
                <option value="+298">+298 Faroe Islands</option>
                <option value="+679">+679 Fiji</option>
                <option value="+358">+358 Finland</option>
                <option value="+33">+33 France</option>
                <option value="+689">+689 French Polynesia</option>
                <option value="+220">+220 Gambia</option>
                <option value="+995">+995 Georgia</option>
                <option value="+49">+49 Germany</option>
                <option value="+233">+233 Ghana</option>
                <option value="+30">+30 Greece</option>
                <option value="+299">+299 Greenland</option>
                <option value="+502">+502 Guatemala</option>
                <option value="+224">+224 Guinea</option>
                <option value="+592">+592 Guyana</option>
                <option value="+509">+509 Haiti</option>
                <option value="+504">+504 Honduras</option>
                <option value="+36">+36 Hungary</option>
                <option value="+354">+354 Iceland</option>
                <option value="+91">+91 India</option>
                <option value="+62">+62 Indonesia</option>
                <option value="+98">+98 Iran</option>
                <option value="+964">+964 Iraq</option>
                <option value="+353">+353 Ireland</option>
                <option value="+972">+972 Israel</option>
                <option value="+39">+39 Italy</option>
                <option value="+962">+962 Jordan</option>
                <option value="+7">+7 Kazakhstan</option>
                <option value="+254">+254 Kenya</option>
                <option value="+383">+383 Kosovo</option>
                <option value="+965">+965 Kuwait</option>
                <option value="+996">+996 Kyrgyzstan</option>
                <option value="+856">+856 Laos</option>
                <option value="+371">+371 Latvia</option>
                <option value="+961">+961 Lebanon</option>
                <option value="+218">+218 Libya</option>
                <option value="+423">+423 Liechtenstein</option>
                <option value="+370">+370 Lithuania</option>
                <option value="+352">+352 Luxembourg</option>
                <option value="+853">+853 Macau</option>
                <option value="+389">+389 Macedonia</option>
                <option value="+261">+261 Madagascar</option>
                <option value="+265">+265 Malawi</option>
                <option value="+60">+60 Malaysia</option>
                <option value="+960">+960 Maldives</option>
                <option value="+223">+223 Mali</option>
                <option value="+356">+356 Malta</option>
                <option value="+692">+692 Marshall Islands</option>
                <option value="+222">+222 Mauritania</option>
                <option value="+230">+230 Mauritius</option>
                <option value="+52">+52 Mexico</option>
                <option value="+373">+373 Moldova</option>
                <option value="+976">+976 Mongolia</option>
                <option value="+382">+382 Montenegro</option>
                <option value="+212">+212 Morocco</option>
                <option value="+258">+258 Mozambique</option>
                <option value="+95">+95 Myanmar</option>
                <option value="+264">+264 Namibia</option>
                <option value="+977">+977 Nepal</option>
                <option value="+31">+31 Netherlands</option>
                <option value="+687">+687 New Caledonia</option>
                <option value="+64">+64 New Zealand</option>
                <option value="+505">+505 Nicaragua</option>
                <option value="+227">+227 Niger</option>
                <option value="+234">+234 Nigeria</option>
                <option value="+47">+47 Norway</option>
                <option value="+968">+968 Oman</option>
                <option value="+92">+92 Pakistan</option>
                <option value="+680">+680 Palau</option>
                <option value="+970">+970 Palestine</option>
                <option value="+507">+507 Panama</option>
                <option value="+675">+675 Papua New Guinea</option>
                <option value="+595">+595 Paraguay</option>
                <option value="+51">+51 Peru</option>
                <option value="+63">+63 Philippines</option>
                <option value="+48">+48 Poland</option>
                <option value="+351">+351 Portugal</option>
                <option value="+974">+974 Qatar</option>
                <option value="+262">+262 Reunion</option>
                <option value="+40">+40 Romania</option>
                <option value="+7">+7 Russia</option>
                <option value="+250">+250 Rwanda</option>
                <option value="+685">+685 Samoa</option>
                <option value="+966">+966 Saudi Arabia</option>
                <option value="+221">+221 Senegal</option>
                <option value="+381">+381 Serbia</option>
                <option value="+248">+248 Seychelles</option>
                <option value="+232">+232 Sierra Leone</option>
                <option value="+421">+421 Slovakia</option>
                <option value="+386">+386 Slovenia</option>
                <option value="+677">+677 Solomon Islands</option>
                <option value="+252">+252 Somalia</option>
                <option value="+27">+27 South Africa</option>
                <option value="+211">+211 South Sudan</option>
                <option value="+34">+34 Spain</option>
                <option value="+94">+94 Sri Lanka</option>
                <option value="+249">+249 Sudan</option>
                <option value="+597">+597 Suriname</option>
                <option value="+46">+46 Sweden</option>
                <option value="+41">+41 Switzerland</option>
                <option value="+963">+963 Syria</option>
                <option value="+992">+992 Tajikistan</option>
                <option value="+255">+255 Tanzania</option>
                <option value="+66">+66 Thailand</option>
                <option value="+228">+228 Togo</option>
                <option value="+676">+676 Tonga</option>
                <option value="+216">+216 Tunisia</option>
                <option value="+90">+90 Turkey</option>
                <option value="+993">+993 Turkmenistan</option>
                <option value="+256">+256 Uganda</option>
                <option value="+380">+380 Ukraine</option>
                <option value="+971">+971 United Arab Emirates</option>
                <option value="+44">+44 United Kingdom</option>
                <option value="+1">+1 United States</option>
                <option value="+598">+598 Uruguay</option>
                <option value="+998">+998 Uzbekistan</option>
                <option value="+678">+678 Vanuatu</option>
                <option value="+58">+58 Venezuela</option>
                <option value="+84">+84 Vietnam</option>
                <option value="+967">+967 Yemen</option>
                <option value="+260">+260 Zambia</option>
                <option value="+263">+263 Zimbabwe</option>
              </select>
              <div className="certification-number">
                <input className="input-box" type="number" id="number" placeholder="(예시) 01034567890" />
                <button>인증번호 받기</button>
              </div>
              <input className="input-box" type="number" id="certificationNumber" placeholder="인증번호를 입력해 주세요." />
              <small id="numberCheck"></small>
            </div>
            <div className="signup-input">
              <p className="input-password">비밀번호</p>
              <input className="input-box" type="password" id="password" placeholder="비밀번호를 입력해 주세요." />
              <p id="inputPasswordCondition">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요.</p>
              <small id="passwordCheck"></small>
            </div>
            <div className="signup-input">
              <p className="input-check-password">비밀번호 확인</p>
              <input className="input-box" type="password" id="checkPassword" placeholder="비밀번호를 다시 한번 입력해 주세요." />
              <small id="passwordDoubleCheck"></small>
            </div>
            <div className="agree-checkbox">
              <div>
                <input type="checkbox" name="selectall" value="" /*onClick={selectAll}*/ />
                <span>전체 동의</span>
              </div>
              <hr />
              <div className="agree-checkbox-one">
                <input type="checkbox" name="agreement" value="1" onClick={checkSelectAll} />
                <span>만 14세 이상입니다.(필수)</span>
              </div>
              <div className="agree-checkbox-one">
                <input type="checkbox" name="agreement" value="2" onClick={checkSelectAll} />
                <span>oneID 이용약관 동의 (필수)</span>
              </div>
              <div className="agree-checkbox-one">
                <input type="checkbox" name="agreement" value="3" onClick={checkSelectAll} />
                <span>개인정보 및 수집 이용 동의 (필수)</span>
              </div>
            </div>
          </div>
          <div className="panel-buttons">
            <input type="submit" className="signup-button" value="회원가입하기" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
