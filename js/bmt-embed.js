var BMT=(function(l){"use strict";class m{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const e=document.getElementById("app");return e?(this._readFromApp(e),this._observeApp(e),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(e){this._theme=e.getAttribute("data-sync-theme")||"dark",this._motif=e.getAttribute("data-sync-motif")||"brand",this._lang=e.getAttribute("data-sync-lang")||"en"}_observeApp(e){this._observer||(this._observer=new MutationObserver(t=>{let a=!1;for(const i of t){if(i.attributeName==="data-sync-theme"){const o=e.getAttribute("data-sync-theme")||"dark";o!==this._theme&&(this._theme=o,a=!0)}if(i.attributeName==="data-sync-motif"){const o=e.getAttribute("data-sync-motif")||"brand";o!==this._motif&&(this._motif=o,a=!0)}if(i.attributeName==="data-sync-lang"){const o=e.getAttribute("data-sync-lang")||"en";o!==this._lang&&(this._lang=o,a=!0)}}a&&this._notify()}),this._observer.observe(e,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const e of this._listeners)try{e(this)}catch(t){console.warn("[BMAThemeResolver] Listener error:",t)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(e){return this._listeners.add(e),()=>this._listeners.delete(e)}}const d=new m().init();function h(){return`
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :host {
      font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    /* Shared keyframe animations */
    @keyframes bma-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    @keyframes bma-glow-pulse {
      0%, 100% { box-shadow: var(--status-live-glow, 0 0 8px rgba(0,230,118,0.2)); }
      50% { box-shadow: 0 0 16px rgba(0,230,118,0.4); }
    }

    @keyframes bma-fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes bma-slideUp {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes bma-fillProgress {
      from { width: 0%; }
      to { width: var(--progress-target, 0%); }
    }

    @keyframes bma-shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    /* Screen reader only */
    .bma-sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `}function f(){return`
    /* Press feedback on all interactive elements */
    [role="button"]:active,
    button:active {
      transform: scale(0.97);
      transition: transform 75ms ease;
    }

    /* Keyboard focus ring */
    [role="button"]:focus-visible,
    button:focus-visible {
      outline: none;
      box-shadow: var(--focus-ring, 0 0 0 2px rgba(247, 198, 13, 0.4));
    }
  `}class v extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=d.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const e=d.theme;let t=this.getAttribute("data-sport-group")||"Soccer",a,i;t==="Multi"?(a="Multi",i=`var(--sport-icon__Multi--${e})`):(a=t.replaceAll(" ","_"),i=`var(--sport-icon__${a}--${e})`),this.shadowRoot.innerHTML=`
      <style>
        ${h()}

        :host {
          display: inline-block;
          width: 30px; height: 30px;
          border-radius: 50%;
          background-color: transparent;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          border: none;
        }

        :host([data-sport-group="${t}"]) {
          background-image: ${i};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",v);let p=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nba_summer_league",group:"Basketball",title:"NBA Summer League",description:"NBA Summer League",active:!0,has_outrights:!1},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!1,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup",group:"Soccer",title:"FIFA World Cup",description:"FIFA World Cup 2026",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1",description:"French Soccer",active:!0,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga",description:"German Soccer",active:!0,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A",description:"Italian Soccer",active:!0,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga",description:"Spanish Soccer",active:!0,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_champs_league_qualification",group:"Soccer",title:"UCL Qualification",description:"UEFA Champions League Qualification",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!0,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];class _ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags","data-bma-tourn-private"]}get isPrivate(){return this.getAttribute("data-bma-tourn-private")==="true"}connectedCallback(){this.render(),this._unsub=d.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._foilObserver&&(this._foilObserver.disconnect(),this._foilObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(e,t={}){const a=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:e,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...t}});this.dispatchEvent(a)}attachEventListeners(){this.shadowRoot.addEventListener("click",e=>{const t=e.target.closest(".btn-info"),a=e.target.closest(".btn-join"),i=e.target.closest(".btn-play"),o=e.target.closest("bma-sport-icon");if(t){e.stopPropagation(),this.dispatchCardEvent("INFO");return}if(a){e.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(i){e.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(o){e.stopPropagation();const s=o.getAttribute("sport"),n=this.getSportInfo(s);this.dispatchCardEvent("SPORT_ICON",{sportKey:s,sportTitle:n.title,sportDescription:n.description});return}e.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(e,t,a){t!==a&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const e=this.shadowRoot?.querySelector(".card");if(!e)return;const t=e.scrollHeight-e.clientHeight,a=this.getAttribute("data-compact")==="true";!a&&t>2?this.setAttribute("data-compact","true"):a&&t<-10&&this.removeAttribute("data-compact")})}getTheme(){return d.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let e=this.getAttribute("data-bma-tourn-entities");if(e)try{const t=JSON.parse(e);return Array.isArray(t)?t.find(i=>Array.isArray(i))?.length||"0":typeof t?.count=="number"?String(t.count):t?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let e=this.getAttribute("data-bma-tourn-entities");if(e)try{const t=JSON.parse(e);return Array.isArray(t)?t.find(i=>Array.isArray(i))||[]:t?.guids||[]}catch{return[]}return[]}get entitiesData(){let e=this.getAttribute("data-bma-tourn-entities");if(e)try{const t=JSON.parse(e);if(Array.isArray(t)){const a=t.find(o=>o&&typeof o=="object"&&!Array.isArray(o));return{current:t.find(o=>Array.isArray(o))?.length||0,max:parseInt(a?.max)||100}}return{current:typeof t?.count=="number"?t.count:t?.guids?.length||0,max:t?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const t=document.getElementById("app")?.dataset?.userGuid;return t?this.entitiesGuids.includes(t):!1}getUserBadge(){const t=document.getElementById("app")?.dataset?.userGuid;if(!t)return null;const a=this.getAttribute("data-bma-tourn-tags");if(!a)return null;try{const i=JSON.parse(a);if(!Array.isArray(i))return null;const o=i.find(s=>!!(typeof s=="object"&&s!==null&&(s.entity_guid===t&&s.badge&&s.badge.startsWith("--badge__ribbon--")||s[t]&&s[t].startsWith("--badge__ribbon--"))));return o&&(o.badge||o[t])||null}catch{return null}}getBadgeClass(){const e=this.getUserBadge();if(!e)return"";const t=e.match(/--badge__ribbon--(\w+)/);return t?t[1]:""}getSportInfo(e){const t=p.find(a=>a.key===e);return t?{title:t.title,description:t.description}:{title:e,description:e}}get matches(){let e=this.getAttribute("data-bma-tourn-matches");return e&&(e=JSON.parse(e)),e?.length||"0"}get matches_expanded(){let e=this.getAttribute("data-bma-tourn-matches_expanded");return e&&(e=JSON.parse(e)),e||null}get marqueeText(){const e=this.matches_expanded;return!e||e.length===0?"   Game lines drop a few days before each matchup   ":"  "+e.map(a=>{const i=a.title||"Match";let o="TBD";if(a.scheduled_at)try{o=new Date(a.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{o=a.scheduled_at}return`  ${i} @ ${o}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT_FORMAT"}get gameModeBadge(){if(typeof window.GameTypeLifeCycle>"u")return null;const e=window.GameTypeLifeCycle.forToken(this.gameType);return e?e.badge:null}get prizeDistro(){const e=this.getAttribute("data-bma-tourn-prize_distro");if(!e)return null;try{return JSON.parse(e)}catch{return e}}get entryFee(){const e=this.getAttribute("data-bma-tourn-entry_fee");return!e||Number(e)===0?"Free":e}get sportsAllowed(){const e=this.getAttribute("data-bma-tourn-sports_allowed");if(!e)return[];try{const t=JSON.parse(e);return Array.isArray(t)?t.map(a=>typeof a=="object"&&a.sport_key?a.sport_key:a):[t]}catch{return[e]}}get sportsDisplay(){const e=this.sportsAllowed;if(!Array.isArray(e)||e.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const t=Math.min(e.length,3);let a="";for(let i=0;i<t;i++){const o=e[i].key,s=p.find(c=>c.key===o),n=s?s.group:"default";a+=`<bma-sport-icon sport="${o}" data-sport-group="${n}"></bma-sport-icon>`}return e.length>3&&(a+=`<span class="sport-count">+${e.length-3}</span>`),a}get sportsRowDisplay(){const e=this.sportsAllowed;if(!Array.isArray(e)||e.length===0)return"";const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",soccer_fifa_world_cup:"WORLD CUP",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},a=3;let i=e.slice(0,a).map(o=>{const s=o.key,n=p.find(A=>A.key===s),c=n?n.group:"default",S=t[s]||n?.title||s;return`<span class="tc-sport"><bma-sport-icon sport="${s}" data-sport-group="${c}"></bma-sport-icon><span class="tc-sport-label">${S}</span></span>`}).join("");return e.length>a&&(i+=`<span class="tc-sport-more">+${e.length-a}</span>`),i}render(){const e=this.getTheme(),t=this.getAttribute("data-sync-theme")||e;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${h()}
        ${f()}
        :host {
          display: block;
          aspect-ratio: 1 / 1.2; /* width / height */
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: var(--card-radius, var(--radius-lg, 12px));
          transition: border-color var(--transition-normal, 0.25s ease);
        }

        /* Lift only on real hover devices. On touch, :hover sticks after a tap
           (the "selected" card) and the lifted top gets clipped by the rail's
           vertical overflow — looked like the card top was cut off. */
        @media (hover: hover) {
          :host(:hover) {
            border-color: rgba(255, 255, 255, 0.4);
            transform: translateY(-4px);
          }
        }

        /* Small variant */
        :host([data-n55-size="small"]) {
          min-width: 192px;  /* 256px - 64px */
          max-width: 320px;  /* 384px - 64px */
        }

        /* Medium variant (default) */
        :host([data-n55-size="medium"]) {
          min-width: 256px;
          max-width: 384px;
        }

        /* Large variant */
        :host([data-n55-size="large"]) {
          min-width: 320px;  /* 256px + 64px */
          max-width: 448px;  /* 384px + 64px */
        }

        /* Status color now lives in the top .tc-burst (Sleeper-style accent),
           not a full-card gradient. The card stays dark for consistency. */

        /* Trophy badges for tournament winners — directly above info button */
        .badge-ribbon {
          width: clamp(72px, 45vw, 180px);
          height: clamp(72px, 45vw, 180px);
          margin: 0 auto 4px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          display: none;
          position: relative;
          z-index: 8;
        }

        .badge-ribbon.visible {
          display: block;
        }

        /* Badge variants */
        .badge-ribbon.gold {
          background-image: var(--trophy-gold-short);
        }

        .badge-ribbon.silver {
          background-image: var(--trophy-silver-short);
        }

        .badge-ribbon.bronze {
          background-image: var(--trophy-bronze-short);
        }

        /* Wait state - blur and make unclickable */
        :host([data-bma-tourn-wait="true"]) .card {
          filter: blur(2px);
          opacity: 0.6;
          pointer-events: none;
          cursor: wait;
        }

        :host([data-bma-tourn-wait="true"]) {
          pointer-events: none;
          cursor: wait;
        }

        :host([data-bma-tourn-wait="true"])  neodigm-juicebar { position: absolute; display: block; width: 100%; top: 2px; }
        :host([data-bma-tourn-wait="false"]) neodigm-juicebar { display: none; }


        .card {
          position: relative;
          background: linear-gradient(135deg, var(--card-bg, #181818) 0%, var(--surface-default, #161616) 100%);
          border: none;
          border-radius: var(--card-radius, var(--radius-lg, 12px));
          color: var(--app-core-color--white-5__dark--brand, #fff);
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          user-select: none;
          transition: transform var(--transition-normal, 0.3s ease), box-shadow var(--transition-normal, 0.3s ease);
          box-shadow: var(--card-shadow, 0 3px 6px rgba(0,0,0,0.4)), var(--shadow-inset-top, inset 0 1px 0 rgba(255,255,255,0.05));
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .chevron-cover {
          display: none;
        }

        /* ════ Bet Max (private) pool — gold-foil "pass" treatment ════
           The host becomes a foil-gradient frame (padding reveals it around
           the inner card), and a sheen-swept foil band overlays the top of
           the burst. Overlay (not a flow row) so the fixed card aspect ratio
           isn't disturbed. */
        /* Gold band on all cards (BET MAX POOL / Public Lobby). Status now sits
           bottom-right, so no need to shift it below the band. */

        /* Combined seam badge — lobby type + live status in ONE pill, centered
           on the burst/body seam. Dark frosted base so it pops on any burst
           tint; a thin divider splits the lobby label (left) from the status
           (right: colored dot + text). */
        .tc-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: var(--radius-full, 9999px);
          background: rgba(8, 10, 9, 0.82);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
          font-size: var(--text-2xs);
          font-weight: var(--weight-bold);
          letter-spacing: 0.5px;
          line-height: 1;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .tc-tag__lobby { display: inline-flex; align-items: center; gap: 5px; color: #ffffff; }
        /* Icon mirrors the app-foot tab: trophy = Lobby (Public Tourney),
           person_celebrate = Pools (Bet Max Pool). Rendered as a CSS mask so
           it can be tinted — white for public, gold for pool. */
        .tc-tag__ico {
          width: 12px;
          height: 12px;
          flex: 0 0 auto;
          -webkit-mask-position: center; mask-position: center;
          -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
          -webkit-mask-size: contain; mask-size: contain;
        }
        .tc-tag--public .tc-tag__ico {
          background-color: #ffffff;
          -webkit-mask-image: var(--nav-icon__trophy--dark);
          mask-image: var(--nav-icon__trophy--dark);
        }
        .tc-tag--pool .tc-tag__ico {
          background-color: #ffffff;
          -webkit-mask-image: var(--nav-icon__person_celebrate--dark);
          mask-image: var(--nav-icon__person_celebrate--dark);
        }

        .tc-tag__sep {
          width: 1px;
          height: 11px;
          background: rgba(255, 255, 255, 0.22);
          flex: 0 0 auto;
        }

        .tc-tag__status { display: inline-flex; align-items: center; gap: 5px; }
        .tc-tag__dot { width: 6px; height: 6px; border-radius: 50%; flex: 0 0 auto; }
        .tc-tag--open .tc-tag__status { color: #4dffa0; }
        .tc-tag--open .tc-tag__dot { background: #00E676; box-shadow: 0 0 6px rgba(0, 230, 118, 0.85); }
        .tc-tag--live .tc-tag__status { color: #ffd84d; }
        .tc-tag--live .tc-tag__dot { background: #F7C60D; animation: tc-tag-pulse 1.6s ease-out infinite; }
        .tc-tag--done .tc-tag__status { color: #c4c8cc; }
        .tc-tag--done .tc-tag__dot { background: #9aa0a6; }

        @keyframes tc-tag-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(247, 198, 13, 0.55); }
          70%  { box-shadow: 0 0 0 5px rgba(247, 198, 13, 0); }
          100% { box-shadow: 0 0 0 0 rgba(247, 198, 13, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .tc-tag--live .tc-tag__dot { animation: none; }
        }

        .card-header {
          z-index: 4;
          position: relative;
        }

        .card-body,
        .card-actions,
        .card-bottom-section {
          position: relative;
          z-index: 2;
        }

        .card:hover {
          box-shadow: var(--card-shadow-hover, 0 6px 12px rgba(0,0,0,0.4)), var(--shadow-inset-top, inset 0 1px 0 rgba(255,255,255,0.05));
          filter: brightness(1.04);
        }

        .card:focus-visible {
          outline: none;
          box-shadow: var(--focus-ring, 0 0 0 2px rgba(247, 198, 13, 0.4)), var(--card-shadow, 0 3px 6px rgba(0,0,0,0.4));
        }

        /* Status-based card accents */
        .card[data-bma-tourn-status="COMPLETED"] {
          QQQQopacity: 0.9;
        }

        .card[data-bma-tourn-status="COMPLETED"]:hover {
          QQQQopacity: 1;
        }

        .card-header {
          display: flex;
          flex-direction: column;
          height: 132px;
          flex-shrink: 0;
          padding: 12px 10px 14px;
          background: var(--card-bg, #181818);
          overflow: hidden;
          box-shadow:
            var(--shadow-inset-depth, inset 0 -8px 12px rgba(0, 0, 0, 0.4)),
            var(--shadow-inset-top, inset 0 1px 0 rgba(255, 255, 255, 0.05));
          background-image:
            linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 40%, rgba(0,0,0,0.15) 100%);
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .header-top .sport-tag {
          gap: 0.2rem;
        }

        .header-top .sport-count {
          margin-left: 0.15rem;
        }

        .header-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          min-height: 0;
        }

        .txt-caption {
          font-size: var(--text-base, 1rem); font-weight: var(--weight-semibold, 600);
          color: #FFFFFF;
          margin: 0 0 2px 0;
          line-height: 1.3;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-wrap: break-word;
        }
        /* Title is always white — status is conveyed by the burst + pill,
           not by tinting the title text. */

        .tagline {
          font-size: 13px;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          margin: 0;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          font-style: italic;
          word-wrap: break-word;
          min-height: 0;
        }

        .sport-tag {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--app-core-color--gray-6__dark--brand, #b0b0b0);
          text-transform: uppercase;
          font-weight: var(--weight-medium, 500);
        }

        .sport-count {
          margin-left: 0.25rem;
          font-size: 0.7rem;
          color: var(--app-core-color--gray-5__dark--brand, #888);
        }

        .header-badges {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .game-mode-badge {
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full, 9999px);
          font-size: var(--badge-font-size, 0.7rem);
          font-weight: var(--badge-font-weight, 600);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: rgba(255, 255, 255, 0.5);
          background: transparent;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .card-body {
          display: grid;
          grid-template-rows: auto 1fr auto;
          flex: 1 1 auto;
          min-height: 0;
          margin-top: 8px;
        }

        .info-item {
          display: grid;
          grid-template-columns: 32% 32% 32%;
          gap: 2%;
          text-align: center;
          margin: 0 6px;
          min-width: 0;
          width: calc(100% - 12px);
          padding-bottom: 2px;
        }

        .info-item .info-cell {
          border-radius: 0;
          padding: 2px 1px;
          position: relative;
        }

        .info-item .info-cell > P {
          margin: 4px 0;
        }

        .info-cell .info-label {
          font-size: 0.62rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          font-weight: var(--weight-semibold, 600);
          letter-spacing: 0.6px;
          margin-bottom: 3px;
          white-space: nowrap;
        }

        .card-bottom-section .info-cell .info-label {
          color: rgba(255, 255, 255, 0.6);
        }

        .info-cell .info-value {
          font-size: clamp(0.92rem, 0.82rem + 0.5vw, 1.25rem);
          font-weight: var(--weight-bold, 700);
          color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-bottom-section .info-cell .info-value {
          color: var(--status-locked-text, #F7C60D);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }

        /* Action buttons */
        .card-actions {
          display: flex;
          gap: 6px;
          margin-top: 12px;
          padding: 0 12px 16px;
          flex-shrink: 0;
        }

        .btn-info,
        .btn-join,
        .btn-play {
          flex: 1;
          height: 28px;
          padding: 5px;
          border: none;
          border-radius: var(--btn-radius, var(--radius-md, 8px));
          font-size: var(--text-xs);
          font-weight: var(--weight-bold);
          cursor: pointer;
          transition: all var(--transition-normal, 0.2s ease);
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        /* INFO is the SECONDARY action — flat/neutral in every state so the
           solid JOIN/PLAY owns the primary CTA. (Previously green/gold per
           status, which competed with the primary button.) */
        .btn-info {
          background: rgba(30, 30, 30, 0.85);
          color: #FAFAFA;
          border: none;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
          position: relative;
          overflow: hidden;
          font-weight: var(--weight-semibold, 600);
        }

        .btn-info:hover {
          background: rgba(50, 50, 50, 0.9);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.22);
          color: #FFFFFF;
        }

        .btn-join {
          background: linear-gradient(135deg, rgb(var(--join-btn-start-rgb, var(--brand-accent-rgb, 0, 230, 118))) 0%, rgb(var(--join-btn-end-rgb, var(--brand-accent-2-rgb, 247, 198, 13))) 100%);
          color: var(--join-btn-fg, #000);
          display: none;
          position: relative;
          border: none;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.15);
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
          font-weight: var(--weight-semibold, 600);
          font-size: var(--text-sm, 0.875rem); /* clamp MIN 14px — 375px unchanged */
          letter-spacing: 0.5px;
        }

        .btn-join::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(0, 0, 0, 0.02) 10px,
            rgba(0, 0, 0, 0.02) 20px
          );
          pointer-events: none;
        }

        .btn-join.visible {
          display: block;
        }

        .btn-join:hover {
          background: linear-gradient(135deg, color-mix(in srgb, rgb(var(--join-btn-start-rgb, var(--brand-accent-rgb, 0, 230, 118))) 88%, #fff) 0%, color-mix(in srgb, rgb(var(--join-btn-end-rgb, var(--brand-accent-2-rgb, 247, 198, 13))) 88%, #fff) 100%);
          transform: translateY(-1px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 3px 6px rgba(0, 0, 0, 0.2);
        }

        .btn-play {
          background: linear-gradient(180deg, rgb(var(--brand-accent-2-rgb, 247, 198, 13)) 0%, color-mix(in srgb, rgb(var(--brand-accent-2-rgb, 247, 198, 13)) 88%, #000) 100%);
          color: #000;
          display: none;
          position: relative;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.15);
        }

        .btn-play.visible {
          display: block;
        }

        .btn-play:hover {
          background: linear-gradient(180deg, color-mix(in srgb, rgb(var(--brand-accent-2-rgb, 247, 198, 13)) 88%, #fff) 0%, rgb(var(--brand-accent-2-rgb, 247, 198, 13)) 100%);
          transform: translateY(-1px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 3px 6px rgba(0, 0, 0, 0.2);
        }

/*  Neodigm Marquee Begin  */
neodigm-marquee pre { color: var( --app-core-color--yellow-1__dark--brand ) !important; }

.QQQQcard-focus__feedback {
    visibility: hidden;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 132px;
    left: 0;
    right: 0;
    z-index: 5;
}

:host([data-bma-tourn-class="COMPLETED"]) .card-focus__feedback {
    display: none;
}

/*  Neodigm Marquee End  */

        /* Progress Bar - now in bottom section */
        .card-entrants__dataviz {
          padding: 0 10px 6px;
        }

        /* Bottom Section with solid background matching header */
        .card-bottom-section {
          background: var(--card-bg, #181818);
          padding: 8px 0 6px;
          margin-top: auto;
          flex-shrink: 0;
        }

        /* Compact overrides removed — compact values are now the base defaults */

        @media (max-width: 768px) {
          .card-bottom-section {
            padding: 12px 0 8px;
          }

          .card-entrants__dataviz {
            padding: 0 12px 10px;
          }

          .info-item {
            margin: 0 6px;
            width: calc(100% - 12px);
            padding-bottom: 6px;
            gap: 4px;
          }

          .info-item .info-cell {
            padding: 4px 2px;
          }

          .info-cell .info-label {
            font-size: 0.56rem;
            margin-bottom: 4px;
          }

          .info-cell .info-value {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 390px) {
          .info-item {
            margin: 0 4px;
            width: calc(100% - 8px);
            gap: 3px;
          }

          .info-item .info-cell {
            padding: 4px 1px;
          }

          .info-cell .info-label {
            font-size: 0.52rem;
            letter-spacing: 0.7px;
          }

          .info-cell .info-value {
            font-size: 0.84rem;
          }
        }

        .progress-container {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-weight: var(--weight-semibold, 600);
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: var(--progress-bg, rgba(255, 255, 255, 0.08));
          border-radius: var(--progress-radius, var(--radius-sm, 4px));
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          border-radius: var(--progress-radius, var(--radius-sm, 4px));
          animation: fillProgress 3.2s ease-in forwards;
          background: linear-gradient(90deg, #00E676 0%, #00E676 50%, #00E676 100%);
          background-size: 200% 100%;
          position: relative;
        }


        @keyframes fillProgress {
          from {
            width: 0%;
          }
        }

        /* Progress bar colors based on status */
        :host([data-bma-tourn-status="UPCOMING"]) .progress-fill {
          background: var(--status-upcoming-text, var(--app-core-color--green-3__dark--brand, #14b963));
        }

        :host([data-bma-tourn-status="LOCKED"]) .progress-fill {
          background: var(--status-locked-text, var(--app-core-color--yellow-3__dark--brand, #F7C60D));
        }

        :host([data-bma-tourn-status="COMPLETED"]) .progress-fill {
          background: var(--status-completed-text, var(--app-core-color--gray-6__dark--brand, #969696));
        }

        :host([data-bma-tourn-status="DRAFT"]) .progress-fill {
          background: var(--app-core-color--gray-5__dark--brand, #484848);
        }
/*  Neodigm JuiceBar Begin  */
neodigm-juicebar{
    display: block;
    height: 4px; width: 99%;
    background-color: #f8f8f8;
    overflow: hidden;
}
neodigm-juicebar[data-n55-size='pico']  { height: 1px; }
neodigm-juicebar[data-n55-size='micro'] { height: 2px; }
neodigm-juicebar[data-n55-size='milli'],
neodigm-juicebar[data-n55-size='xsmall']{ height: 3px; }  /*  Milli and XSmall same  */
neodigm-juicebar[data-n55-size='small'] { height: 4px; }
neodigm-juicebar[data-n55-size='medium']{ height: 8px; }
neodigm-juicebar[data-n55-size='large'] { height: 12px; }
neodigm-juicebar[data-n55-size='xlarge']{ height: 16px; }
[data-n55-ampm-theme="light"] neodigm-juicebar { background-color: #f8f8f8; }
[data-n55-ampm-theme="dark"] neodigm-juicebar { background-color: var( --neodigm-theme-night-alt ); }

neodigm-juicebar > DIV {
    height: 100%;
    background-color: var( --neodigm-theme-brand );
    animation: juicebar_linear 1s infinite ease-in-out;
    transform-origin: 0% 50%;
}
neodigm-juicebar[data-n55-show="false"] { visibility: hidden; }

[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='brand'] > DIV{ background-color: var( --neodigm-theme-brand )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='primary'] > DIV{ background-color: var( --neodigm-theme-primary )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='secondary'] > DIV{ background-color: var( --neodigm-theme-secondary )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='success'] > DIV{ background-color: var( --neodigm-theme-success )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='danger'] > DIV{ background-color: var( --neodigm-theme-danger )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='warning'] > DIV{ background-color: var( --neodigm-theme-warning )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='info'] > DIV{ background-color: var( --neodigm-theme-info )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='disabled'] > DIV{ background-color: var( --neodigm-theme-disabled )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='night'] > DIV{ background-color: var( --neodigm-theme-night )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='marcom'] > DIV{ background-color: var( --neodigm-theme-marcom )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='party'] > DIV{ background-color: var( --neodigm-theme-party )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='brand'] > DIV{ background-color: var( --neodigm-theme-brand-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='primary'] > DIV{ background-color: var( --neodigm-theme-primary-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='secondary'] > DIV{ background-color: var( --neodigm-theme-secondary-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='success'] > DIV{ background-color: var( --neodigm-theme-success-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='danger'] > DIV{ background-color: var( --neodigm-theme-danger-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='warning'] > DIV{ background-color: var( --neodigm-theme-warning-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='info'] > DIV{ background-color: var( --neodigm-theme-info-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='disabled'] > DIV{ background-color: var( --neodigm-theme-disabled-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='night'] > DIV{ background-color: var( --neodigm-theme-night-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='marcom'] > DIV{ background-color: var( --neodigm-theme-marcom-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='party'] > DIV{ background-color: var( --neodigm-theme-party-alt )}

@keyframes juicebar_linear {
    0% { transform: translateX(0) scaleX(0); }
    30% { transform: translateX(0) scaleX(-0.4); }
    100% { transform: translateX(100%) scaleX(0.8); }
}
/*  Neodigm JuiceBar End  */

        /* ════════════════════════════════════════════════════════════
           REDESIGN — Sleeper-style burst + circular game-mode badge.
           Color is a top accent (burst), not a full-card fill. The card
           root (.card) stays dark; status drives only the burst + the
           status pill + the title tint.
           ════════════════════════════════════════════════════════════ */

        /* Burst: focal hero with the status-color radial fading to dark.
           flex:1 so it absorbs slack and the title/KPIs/buttons cluster at the
           bottom of the card. */
        .tc-burst {
          position: relative;
          flex: 1 1 auto;
          min-height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          /* Minimal padding so the game-mode emblem fills the top half as
             large as possible (corner overlays sit above it via z-index). */
          padding: 4px 6px 6px;
          box-sizing: border-box;
          background: var(--card-bg, #181818);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        /* Burst color is now a SOFT GLOW rising from the bottom (the seam,
           behind the lower half) up into the burst — Sleeper-style — rather
           than a full top-down tint. Pared back in intensity so the card reads
           as dark-and-confident with an accent of color, not a color block.
           Origin at 50% 104% (just below the burst) so the brightest band sits
           at the seam and fades upward; the top stays dark. */
        :host([data-bma-tourn-class="UPCOMING"]) .tc-burst {
          background:
            radial-gradient(125% 105% at 50% 104%, var(--card-tint-upcoming, rgba(0, 230, 118, 0.40)) 0%, rgba(0, 230, 118, 0.11) 46%, transparent 78%),
            var(--card-bg, #181818);
        }
        :host([data-bma-tourn-class="LOCKED"]) .tc-burst {
          background:
            radial-gradient(125% 105% at 50% 104%, var(--card-tint-locked, rgba(247, 198, 13, 0.38)) 0%, rgba(247, 198, 13, 0.10) 46%, transparent 78%),
            var(--card-bg, #181818);
        }
        :host([data-bma-tourn-class="COMPLETED"]) .tc-burst {
          background:
            radial-gradient(125% 105% at 50% 104%, var(--card-tint-completed, rgba(205, 86, 89, 0.34)) 0%, rgba(205, 86, 89, 0.09) 46%, transparent 78%),
            var(--card-bg, #181818);
        }

        /* Sport icons — top-left of the burst. */
        .tc-sports {
          position: absolute;
          top: 10px;
          left: 12px;
          display: flex;
          align-items: center;
          gap: 0.2rem;
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          font-weight: var(--weight-medium, 500);
          z-index: 3;
        }

        /* Lobby-type badge on the burst/body seam. .tc-divider is zero-height
           and the badge is absolute, so it adds NO layout height — the flex
           burst keeps its full size. top:-6px lets the badge cross the seam
           line (mostly below it), so the continuous hairline runs into the
           badge's sides while it reads as integrated at the divider. */
        .tc-divider {
          position: relative;
          height: 0;
          z-index: 6;
        }
        .tc-divider .tc-tag {
          position: absolute;
          left: 50%;
          top: -6px;
          transform: translateX(-50%);
        }

        /* Circular game-mode badge — per-mode illustration from svg_icons.css
           (--game-mode-* vars; defined alongside the trophies). The artwork is a
           self-contained circular emblem, so no frame/gradient here. Custom
           properties inherit through the shadow boundary, so the :root vars
           resolve inside the shadow DOM. Defaults to the Tourney emblem. */
        /* Per-mode emblem — an <img> (not a CSS background) so the browser
           renders the SVG crisp at device-pixel-ratio instead of rasterizing it
           low-res and aliasing the ring. */
        /* Per-mode emblem. The frame (radial disc + white inset ring + drop
           shadow) is the element; the emblem is an ::after inset to leave the
           ring, painted from the inlined --game-mode-* data-URL vars (in the CSS
           bundle, so it loads in production — a file <img> uses an absolute base
           path that doesn't resolve on this deploy). */
        /* Clean emblem — no frame/ring/halo; the SVG art is self-contained. */
        .tc-badge {
          aspect-ratio: 1 / 1;
          height: 100%;
          width: auto;
          max-width: 100%;
          box-sizing: border-box;
          position: relative;
          z-index: 2;
        }
        .tc-badge::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: var(--game-mode-tourney);
          /* PNGs are 1900x1900 with a transparent margin around the artwork;
             scale past 100% to crop that margin so the logo fills the badge. */
          background-size: 120%;
          background-position: center;
          background-repeat: no-repeat;
        }
        .tc-badge[data-game-mode="LONGSHOT_MAYHEM"]::after      { background-image: var(--game-mode-longshot); }
        .tc-badge[data-game-mode="ONE_SHOT"]::after, .tc-badge[data-game-mode="SET_IT_AND_FORGET_IT"]::after { background-image: var(--game-mode-oneshot); }
        .tc-badge[data-game-mode="BRACKET"]::after              { background-image: var(--game-mode-bracket); }
        .tc-badge[data-game-mode="TEAM_MODE"]::after            { background-image: var(--game-mode-squads); }
        .tc-badge[data-game-mode="STREAKS"]::after, .tc-badge[data-game-mode="TIERED_FORMAT"]::after { background-image: var(--game-mode-streaks); }
        .tc-badge[data-game-mode="SURVIVOR"]::after             { background-image: var(--game-mode-survivor); }

        /* Trophy ribbon (COMPLETED winners) — constrained inside the burst. */
        /* Winner trophy fills the burst like the game-mode emblem does, instead
           of a tiny 64px mark. background-size:contain (from the base rule) keeps
           the trophy art uncropped and centered, so it scales to the burst
           height — matching the emblem's visual weight. */
        .tc-burst .badge-ribbon {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 140px;
          margin: 0;
          z-index: 2;
        }

        /* Focus marquee — overlays the sports-icon row (above the KPIs),
           shown when setCardFocus clears its inline display:none. Lives in
           .tc-sports-wrap (a non-clipping relative box) so its full height
           isn't cut by the sports row's own overflow:hidden. */
        .tc-sports-wrap {
          position: relative;
        }
        .tc-sports-wrap .card-focus__feedback {
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 4;
        }

        /* Bottom cluster — marquee line, then title, sitting just above the
           KPIs. The title block has a FIXED height (2-line reserve) so 1- and
           2-line titles never shift the KPI/button rows out of alignment
           between cards; the burst above absorbs the difference. */
        .tc-meta {
          flex: 0 0 auto;
          /* Top padding clears the part of the seam status chip that hangs
             below the line (the chip is out of flow). */
          padding: var(--space-5, 20px) var(--space-3, 12px) 0;
          background: var(--card-bg, #181818);
        }
        .tc-marquee {
          margin: 0 0 2px 0;
          height: 16px;
          font-size: var(--text-2xs);
          font-weight: var(--weight-regular);
          line-height: 16px;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          font-style: italic;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tc-title {
          margin: 0;
          font-size: var(--text-lg, 1.125rem); /* clamp MIN 18px — 375px unchanged */
          font-weight: var(--weight-extrabold);
          /* 2-line reserve stays (min-height), but height is auto so the
             fluid clamp MAX (20px) can't clip the second line on large
             screens — the flex burst above absorbs the extra height. */
          min-height: 48px;        /* reserves 2 lines @ 18px/1.3 */
          height: auto;
          color: #FFFFFF;          /* always white */
        }

        /* Sports row — yellow icon + label per sport, above the KPIs. */
        .tc-sports-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 12px 0;
          min-height: 18px;
          overflow: hidden;
          white-space: nowrap;
          background: var(--card-bg, #181818);
        }
        .tc-sport {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          flex: 0 0 auto;
        }
        .tc-sport bma-sport-icon {
          width: 18px;
          height: 18px;
        }
        .tc-sport-label,
        .tc-sport-more {
          font-size: var(--text-2xs);
          font-weight: var(--weight-semibold);
          letter-spacing: 0.03em;
          color: var(--status-locked-text, #F7C60D);
          white-space: nowrap;
        }
        .tc-sport-more { flex: 0 0 auto; }

        /* Stat row — Entry · Games · TD$ · Entrants. Even 4-up columns. */
        .tc-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4px;
          /* Horizontal padding matches .tc-meta (12px) so the first stat's
             left edge lines up with the title — one consistent reading edge. */
          padding: var(--space-4, 16px) var(--space-3, 12px) var(--space-2, 8px);
          text-align: left;
          background: var(--card-bg, #181818);
        }
        .tc-stat {
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }
        .tc-stat-label {
          font-size: var(--text-2xs);
          text-transform: uppercase;
          letter-spacing: 0.3px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: var(--weight-medium);
          line-height: 1.2;
          /* Reserve two lines so a wrapped label (e.g. "Max Entrants") keeps
             all four values on the same baseline. Single-line labels just
             leave the second line empty. */
          min-height: 2.4em;
          max-width: 100%;
          overflow: hidden;
        }
        .tc-stat-value {
          font-size: var(--text-sm);
          font-weight: var(--weight-extrabold);
          font-variant-numeric: tabular-nums;
          color: #FFFFFF;
          line-height: 1.1;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Actions sit on the dark card bg (not on the color anymore). */
        .card-actions {
          background: var(--card-bg, #181818);
        }

      </style>

      <div class="card" data-sync-theme="${t}">
        <!-- BURST: status-color hero behind the circular game-mode badge -->
        <div class="tc-burst">
          ${this.getUserBadge()?`<div class="badge-ribbon visible ${this.getBadgeClass()}"></div>`:`<div class="tc-badge" data-game-mode="${this.gameType||"DEFAULT_FORMAT"}"></div>`}
        </div>

        <!-- DIVIDER: lobby-type badge on the burst/body seam. Zero-height + the
             badge absolute, so it adds NO body height (the burst stays full
             size). It crosses the seam, so the continuous hairline runs
             left/right into the badge. -->
        <div class="tc-divider">
          <span class="tc-tag ${this.isPrivate?"tc-tag--pool":"tc-tag--public"} ${this.status.toUpperCase()==="LOCKED"?"tc-tag--live":this.status.toUpperCase()==="UPCOMING"?"tc-tag--open":"tc-tag--done"}">
            <span class="tc-tag__lobby"><i class="tc-tag__ico"></i>${this.isPrivate?"Bet Max Pool":"Public Tourney"}</span>
            <span class="tc-tag__sep"></span>
            <span class="tc-tag__status"><span class="tc-tag__dot"></span>${this.status.toUpperCase()==="LOCKED"?"IN PROGRESS":this.status.toUpperCase()==="UPCOMING"?"OPEN":this.status}</span>
          </span>
        </div>

        <!-- Wait-state loader (absolute-positioned via :host([wait]) rules) -->
        <output class="card-waiting">
          <neodigm-juicebar role="progressbar" data-n55-theme="brand" data-n55-size="medium"
          style="background-color: #242424;"><div></div></neodigm-juicebar>
        </output>

        <!-- META: marquee line above the title, both just above the KPIs.
             Top padding reserves room for the status chip that crosses the
             seam line above (see .tc-divider). -->
        <div class="tc-meta">
          <p class="tc-marquee">${this.tagline}</p>
          <h3 class="txt-caption tc-title">${this.caption}</h3>
        </div>

        <!-- SPORTS: yellow icon + label row (info-pane style), above the KPIs.
             Doubles as the focus-marquee slot: when the card is selected the
             scrolling matchup marquee overlays this row (see setCardFocus). -->
        <div class="tc-sports-wrap">
          <div class="tc-sports-row">${this.sportsRowDisplay}</div>
          <output class="card-focus__feedback" style="display: none;">
            <neodigm-marquee data-n55-marquee-text="${this.marqueeText}"
            data-n55-marquee-size="small"
            style="padding: 7px 0 4px 0; height: 34px; background-color: #323232">
            <pre data-n55-theme="warning" style="padding: 7px 0 4px 0; height: 34px; background-color: #161616"></pre>
            </neodigm-marquee>
          </output>
        </div>

        <!-- STATS: Entry · Games · TD$ · Entrants (lobby capacity) -->
        <div class="tc-stats">
          <div class="tc-stat">
            <span class="tc-stat-label">Entry</span>
            <span class="tc-stat-value">${this.entryFee}</span>
          </div>
          <div class="tc-stat">
            <span class="tc-stat-label">Games</span>
            <span class="tc-stat-value">${this.matches==0?"TBD":this.matches+(()=>{try{return JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(o=>o.override_last_match_close===!0)?"+":""}catch{return""}})()}</span>
          </div>
          <div class="tc-stat">
            <span class="tc-stat-label">TD$</span>
            <span class="tc-stat-value">${Number(this.tournament_dollars).toLocaleString()}</span>
          </div>
          <div class="tc-stat">
            <span class="tc-stat-label">Max Players</span>
            <span class="tc-stat-value">${Number(this.entitiesData.max).toLocaleString()}</span>
          </div>
        </div>

        <nav class="card-actions">
          <button class="btn-info" aria-label="Tournament information"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Info</button>
          <button class="btn-join ${!this.isUserParticipating()&&this.status.toUpperCase()!=="LOCKED"&&this.status.toUpperCase()!=="COMPLETED"?"visible":""}" aria-label="Join tournament">Join</button>
          <button class="btn-play ${this.isUserParticipating()&&this.status.toUpperCase()!=="COMPLETED"?"visible":""}" aria-label="Play tournament">Play</button>
        </nav>
      </div>
    `,this.updateCompactState(),this.setupFoilSheen()}setupFoilSheen(){if(this._foilObserver&&(this._foilObserver.disconnect(),this._foilObserver=null),!this.isPrivate)return;const e=this.shadowRoot.querySelector(".tc-lobby--pool");if(e){if(typeof IntersectionObserver>"u"){e.classList.add("is-seen");return}this._foilObserver=new IntersectionObserver((t,a)=>{for(const i of t)if(i.isIntersecting){e.classList.add("is-seen"),a.disconnect(),this._foilObserver=null;break}},{threshold:.4}),this._foilObserver.observe(this)}}}customElements.define("bma-tournament-card",_);const g={apiBase:"https://machfive-bmacdev-rest.onrender.com",appBase:"https://www.betmaxtourney.com/app",limit:12};async function y(r){const e=await fetch(`${r}/m5t/v5/tournaments/public`,{headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error(`public tournaments HTTP ${e.status}`);const t=await e.json();return Array.isArray(t?.rows)?t.rows:[]}function x(r,e){const t=document.createElement("bma-tournament-card"),a=(o,s)=>t.setAttribute(o,Array.isArray(s)||s&&typeof s=="object"?JSON.stringify(s):"");t.setAttribute("data-bma-tourn-id",r.id??""),t.setAttribute("data-bma-tourn-guid",r.guid??""),t.setAttribute("data-bma-tourn-caption",r.caption??""),t.setAttribute("data-bma-tourn-tagline",r.tagline??""),t.setAttribute("data-bma-tourn-window_start_time",r.window_start_time??""),t.setAttribute("data-bma-tourn-window_end_time",r.window_end_time??""),a("data-bma-tourn-sports_allowed",r.sports_allowed),a("data-bma-tourn-entities",r.entities),t.setAttribute("data-bma-tourn-tournament_dollars",r.tournament_dollars??""),a("data-bma-tourn-prize_distro",r.prize_distro),a("data-bma-tourn-matches",r.matches_guids),a("data-bma-tourn-matches_expanded",r.matches_expanded),t.setAttribute("data-bma-tourn-entry_fee",r.entry_fee??""),t.setAttribute("data-bma-tourn-rake",r.rake??""),a("data-bma-tourn-tags",r.tags),t.setAttribute("data-bma-tourn-class",r.status??""),t.setAttribute("data-bma-tourn-game-type",r.class||"DEFAULT_FORMAT"),t.setAttribute("data-bma-tourn-status",r.status??""),t.setAttribute("data-sync-theme","dark"),t.setAttribute("data-sync-motif","brand"),t.setAttribute("data-sync-lang","en"),t.setAttribute("data-n55-size","medium"),t.setAttribute("data-bma-tourn-focus",""),t.setAttribute("data-bma-tourn-wait","false"),t.style.cursor="pointer";const i=()=>{r.guid&&(window.location.href=`${e.appBase}/#/preview/${encodeURIComponent(r.guid)}`)};return t.addEventListener("click",i),t.addEventListener("bma-tournament-action",i),t}function k(){if(document.getElementById("bmt-embed-styles"))return;const r=document.createElement("style");r.id="bmt-embed-styles",r.textContent=`
    .bmt-grid {
      display: grid;
      gap: 12px;
      grid-template-columns: repeat(auto-fill, minmax(280px, 340px));
      justify-content: center;
      width: 100%;
    }
    .bmt-grid > bma-tournament-card { width: 100%; }
    .bmt-state { color: #888; padding: 24px; text-align: center; font-family: system-ui, sans-serif; }
  `,document.head.appendChild(r)}async function u(r,e={}){const t={apiBase:e.apiBase||g.apiBase,appBase:e.appBase||g.appBase,limit:e.limit||g.limit,rows:e.rows||null},a=typeof r=="string"?document.querySelector(r):r;if(a){k(),a.classList.add("bmt-grid"),a.innerHTML='<div class="bmt-state">Loading tournaments…</div>';try{const i=t.rows||await y(t.apiBase),o=new Set(["COMPLETED","LOCKED"]),s=i.filter(c=>!o.has(String(c.status||"").toUpperCase()));a.innerHTML="";const n=s.slice(0,t.limit);n.forEach(c=>a.appendChild(x(c,t))),n.length||(a.innerHTML='<div class="bmt-state">No tournaments right now — check back soon.</div>')}catch(i){a.innerHTML='<div class="bmt-state">Couldn’t load tournaments.</div>',console.error("[bmt-embed] mount failed:",i)}}}function b(){document.querySelectorAll("[data-bmt-tournaments]").forEach(r=>{u(r,{apiBase:r.getAttribute("data-bmt-api")||void 0,appBase:r.getAttribute("data-bmt-app")||void 0,limit:parseInt(r.getAttribute("data-bmt-limit"),10)||void 0})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b(),typeof window<"u"&&(window.BMT={mountTournaments:u});const w={mountTournaments:u};return l.default=w,l.mountTournaments=u,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),l})({});
