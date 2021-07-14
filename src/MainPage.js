import { React, Component } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import './MainPage.css';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.countryCodes = {
                "afghanistan":"af","aland+islands":"ax","albania":"al","algeria":"dz","american+samoa":"as","andorra":"ad","angola":"ao","anguilla":"ai","antarctica":"aq","antigua+and+barbuda":"ag","argentina":"ar","armenia":"am","aruba":"aw","australia":"au","austria":"at","azerbaijan":"az","bahamas":"bs","bahrain":"bh","bangladesh":"bd","barbados":"bb","belarus":"by","belgium":"be","belize":"bz","benin":"bj","bermuda":"bm","bhutan":"bt","bolivia":"bo","bosnia+and+herzegovina":"ba","botswana":"bw","bouvet+island":"bv","brazil":"br","british+indian+ocean+territory":"io","brunei+darussalam":"bn","bulgaria":"bg","burkina+faso":"bf","burundi":"bi","cambodia":"kh","cameroon":"cm","canada":"ca","cape+verde":"cv","cayman+islands":"ky","central+african+republic":"cf","chad":"td","chile":"cl","china":"cn","christmas+island":"cx","cocos+(keeling)+islands":"cc","colombia":"co","comoros":"km","congo":"cg","congo+democratic+republic":"cd","cook+islands":"ck","costa+rica":"cr","cote+divoire":"ci","croatia":"hr","cuba":"cu","cyprus":"cy","czech+republic":"cz","denmark":"dk","djibouti":"dj","dominica":"dm","dominican+republic":"do","ecuador":"ec","egypt":"eg","el+salvador":"sv","equatorial+guinea":"gq","eritrea":"er","estonia":"ee","ethiopia":"et","falkland+islands+(malvinas)":"fk","faroe+islands":"fo","fiji":"fj","finland":"fi","france":"fr","french+guiana":"gf","french+polynesia":"pf","french+southern+territories":"tf","gabon":"ga","gambia":"gm","georgia":"ge","germany":"de","ghana":"gh","gibraltar":"gi","greece":"gr","greenland":"gl","grenada":"gd","guadeloupe":"gp","guam":"gu","guatemala":"gt","guernsey":"gg","guinea":"gn","guinea-bissau":"gw","guyana":"gy","haiti":"ht","heard+island+and+mcdonald+islands":"hm","holy+see+(vatican+city+state)":"va","honduras":"hn","hong+kong":"hk","hungary":"hu","iceland":"is","india":"in","indonesia":"id","iran+islamic+republic+of":"ir","iraq":"iq","ireland":"ie","isle+of+man":"im","israel":"il","italy":"it","jamaica":"jm","japan":"jp","jersey":"je","jordan":"jo","kazakhstan":"kz","kenya":"ke","kiribati":"ki","korea":"kr","north+korea":"kp","kuwait":"kw","kyrgyzstan":"kg","lao+peoples+democratic+republic":"la","latvia":"lv","lebanon":"lb","lesotho":"ls","liberia":"lr","libyan+arab+jamahiriya":"ly","liechtenstein":"li","lithuania":"lt","luxembourg":"lu","macao":"mo","macedonia":"mk","madagascar":"mg","malawi":"mw","malaysia":"my","maldives":"mv","mali":"ml","malta":"mt","marshall+islands":"mh","martinique":"mq","mauritania":"mr","mauritius":"mu","mayotte":"yt","mexico":"mx","micronesia+federated+states+of":"fm","moldova":"md","monaco":"mc","mongolia":"mn","montenegro":"me","montserrat":"ms","morocco":"ma","mozambique":"mz","myanmar":"mm","namibia":"na","nauru":"nr","nepal":"np","netherlands":"nl","netherlands+antilles":"an","new+caledonia":"nc","new+zealand":"nz","nicaragua":"ni","niger":"ne","nigeria":"ng","niue":"nu","norfolk+island":"nf","northern+mariana+islands":"mp","norway":"no","oman":"om","pakistan":"pk","palau":"pw","palestinian+territory+occupied":"ps","panama":"pa","papua+new+guinea":"pg","paraguay":"py","peru":"pe","philippines":"ph","pitcairn":"pn","poland":"pl","portugal":"pt","puerto+rico":"pr","qatar":"qa","reunion":"re","romania":"ro","russian+federation":"ru","rwanda":"rw","saint+barthelemy":"bl","saint+helena":"sh","saint+kitts+and+nevis":"kn","saint+lucia":"lc","saint+martin":"mf","saint+pierre+and+miquelon":"pm","saint+vincent+and+grenadines":"vc","samoa":"ws","san+marino":"sm","sao+tome+and+principe":"st","saudi+arabia":"sa","senegal":"sn","serbia":"rs","seychelles":"sc","sierra+leone":"sl","singapore":"sg","slovakia":"sk","slovenia":"si","solomon+islands":"sb","somalia":"so","south+africa":"za","south+georgia+and+sandwich+isl":"gs","spain":"es","sri+lanka":"lk","sudan":"sd","suriname":"sr","svalbard+and+jan+mayen":"sj","swaziland":"sz","sweden":"se","switzerland":"ch","syrian+arab+republic":"sy","taiwan":"tw","tajikistan":"tj","tanzania":"tz","thailand":"th","timor-leste":"tl","togo":"tg","tokelau":"tk","tonga":"to","trinidad+and+tobago":"tt","tunisia":"tn","turkey":"tr","turkmenistan":"tm","turks+and+caicos+islands":"tc","tuvalu":"tv","uganda":"ug","ukraine":"ua","united+arab+emirates":"ae","united+kingdom":"gb","united+states":"us","united+states+outlying+islands":"um","uruguay":"uy","uzbekistan":"uz","vanuatu":"vu","venezuela":"ve","vietnam":"vn","virgin+islands+british":"vg","virgin+islands+us":"vi","wallis+and+futuna":"wf","western+sahara":"eh","yemen":"ye","zambia":"zm","zimbabwe":"zw"
        };
        this.accessArr = ["2", "9", "a", "7", "f", "f", "3", "b", "0", "8", "6", "d", "7", "2", "7", "e", "c", "d", "f", "0", "5", "a", "a", "1", "e", "3", "2", "7", "f", "4", "f", "6"];
        this.access = this.accessArr.join('');
        this.geoArray = ["1","1","7","1","3","0","8","0","6","7","4","5","0","0","4","e","1","5","8","7","2","8","3","1","x","3","3","4","3","4"];
        this.geo = this.geoArray.join('');

        //Have to give instructions to copy and paste the country names.

        this.modifiedTerms = this.cleanupSearchTerms(this.props.match.params.terms);
    }

    async componentDidMount() {
        try {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.modifiedTerms}&appid=${this.access}`)
            const data = await response.json();
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&&appid=${this.access}`);
            const finalData = await response2.json();
            const response3 = await fetch(`https://geocode.xyz/?locate=${lat},${lon}&json=1&auth=${this.geo}`);
            console.log(finalData);
            const locData = await response3.json();
            console.log(locData);

            const currentPic = `http://openweathermap.org/img/wn/${finalData.current.weather[0].icon}@2x.png`
            console.log(currentPic);
        }
        catch {
            console.log('poop');
        }
    }


    removeCommasandSpaces(terms) {
        let result = "";
        let lastCharSpace = false;
        let lastCharComma = false;

        for (const char of terms) {
            switch (char) {
                case ',':
                    if (!result) {
                        break;
                    }
                    if (lastCharSpace) {
                        result = result.slice(0, -1);
                    }
                    if (!lastCharComma) {
                        lastCharComma = true;
                        lastCharSpace = false;
                        result = result.concat(char);
                    }
                    break;

                case '_':
                    if (lastCharComma) {
                        break;
                    }
                    if (lastCharSpace) {
                        break;
                    }
                    if (!result) {
                        break;
                    }

                    lastCharSpace = true;
                    lastCharComma = false;
                    result = result.concat('+');
                    break;

                default:
                    lastCharComma = false;
                    lastCharSpace = false;
                    result = result.concat(char);
            }
        }
        while (result.charAt(result.length - 1) === '+' || result.charAt(result.length - 1) === ',') {
            result = result.slice(0, -1);
        }
        return result.toLowerCase();
    }

    cleanupSearchTerms(terms) {
        
        const termsArray = this.removeCommasandSpaces(terms).split(',', 2);

        if (termsArray.length === 1) {
            return termsArray[0];
        }

        if (termsArray[1].length === 2) {
            return termsArray[0].concat(`,${termsArray[1]},us`);
        }
        console.log('here');
        return termsArray[0].concat(`,${this.countryCodes[termsArray[1]]}`);
    }
    makeCountryList() {
        const ulArray = [];
        for (const country in this.countryCodes) {
            ulArray.push(country);
        }
        return ulArray;
    }

    render() {
        let searchTerms = this.props.match.params.terms;
        return (
            <div className="MainPage">
                <header>
                    
                </header>
                {searchTerms}
                <ul>
                    {this.makeCountryList().map(country => {
                        return (<li key={country}>{country.replaceAll('+', '  ')}</li>);
                    })} 
                </ul>
            </div>
        )
    }
}

export default MainPage;