export type HirezApiMethods =
  /* APIs - Connectivity, Development, & System Status */
  | "ping"
  | "createsession"
  | "testsession"
  | "getdataused"
  | "gethirezserverstatus"
  | "getpatchinfo"

  /* APIs - Gods/Champions & Items */
  | "getgods"
  | "getchampions"
  | "getchampioncards"
  | "getgodleaderboard"
  | "getchampionleaderboard"
  | "getgodaltabilities"
  | "getgodskins"
  | "getchampionskins"
  | "getgodrecommendeditems"
  | "getchampionecommendeditems"
  | "getitems"
  | "getbountyitems"

  /* APIs - Players & PlayerIds */
  | "getplayer"
  | "getplayerbatch"
  | "getplayeridbyname"
  | "getplayeridbyportaluserid"
  | "getplayeridsbygamertag"
  | "getplayeridinfoforxboxandswitch"

  /* APIs - PlayerId Info */
  | "getfriends"
  | "getgodranks"
  | "getchampionranks"
  | "getplayerloadouts"
  | "getplayerachievements"
  | "getplayerstatus"
  | "getmatchhistory"
  | "getqueuestats"
  | "searchplayers"

  /* APIs - Match Info */
  | "getdemodetails"
  | "getmatchdetails"
  | "getmatchdetailsbatch"
  | "getmatchidsbyqueue"
  | "getmatchplayerdetails"
  | "gettopmatches"

  /* APIs - Leagues, Seasons & Rounds */
  | "getleagueleaderboard"
  | "getleagueseasons"

  /* APIs - Team Info */
  | "getteamdetails"
  | "getteammatchhistory"
  | "getteamplayers"
  | "searchteams"

  /* APIs - Other */
  | "getesportsproleaguedetails"
  | "getmotd";

export type SignatureParams = {
  hirezDevId: string;
  hirezAuthKey: string;
  method: HirezApiMethods;
};
