<script lang="ts" context="module">
  import axios from "axios";
  var timer;
  timer = setInterval(function () {
    getPresence();
  }, 20000);

  interface Root {
    success: boolean;
    data: Data;
  }

  interface Data {
    spotify: Spotify;
    listening_to_spotify: boolean;
    discord_user: DiscordUser;
    discord_status: string;
    activities: Activity[];
    active_on_discord_web: boolean;
    active_on_discord_mobile: boolean;
    active_on_discord_desktop: boolean;
  }

  interface Spotify {
    track_id: string;
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
  }

  interface DiscordUser {
    username: string;
    public_flags: number;
    id: string;
    global_name: any;
    display_name: any;
    discriminator: string;
    bot: boolean;
    avatar_decoration: string;
    avatar: string;
  }

  interface Activity {
    type: number;
    sync_id?: string;
    state: string;
    session_id: string;
    party?: Party;
    name: string;
    id: string;
    flags: number;
    details: string;
    created_at: number;
    assets: Assets;
    buttons?: string[];
    application_id?: string;
  }

  interface Party {
    id: string;
  }

  interface Assets {
    large_text: string;
    large_image: string;
    small_text?: string;
    small_image?: string;
  }

  export function getPresence() {
    axios.get("https://api.lanyard.rest/v1/users/1018551539482230936").then((response) => {
      const obj: Root = response.data;
      if (typeof document !== "undefined") {
        const name = document.getElementById("name");
        const pfp = document.getElementById("pfp") as HTMLImageElement;
        const spot = document.getElementById("song");
        const active = document.getElementById("active");

        if (name) {
          name.innerHTML = obj.data.discord_user.username + "#" + obj.data.discord_user.discriminator;
        }
        if (active) {
          if (obj.data.active_on_discord_desktop) {
            active.innerHTML = "Active on desktop.";
          }
          if (obj.data.active_on_discord_mobile) {
            active.innerHTML = "Active on mobile.";
          }
          if (obj.data.active_on_discord_web) {
            active.innerHTML = "Active on web.";
          }
        }
        if (pfp) {
          pfp.src = "https://cdn.discordapp.com/avatars/" + obj.data.discord_user.id + "/" + obj.data.discord_user.avatar;
        }
        if (obj.data.listening_to_spotify) {
          if (spot) {
            spot.innerHTML = "Listening to " + obj.data.spotify.song + " by " + obj.data.spotify.artist + ".";
          }
        }
      }
    });
  }
</script>

<div class="flex flex-col items-center mx-auto px-2">
  <div class="blue-border flex md:max-w-[42.5%] max-w-sm">
    <img src="" id="pfp" alt="pfp" class="rounded-full p-2" />
    <div class="px-1" />
    <div class="flex-col text-left my-auto pr-4">
      <p class="font-bold" id="name">Name....</p>
      <p id="active" class="font-medium">Active on...</p>
      <p id="song" class="">No Spotify Activity.</p>
    </div>
  </div>
</div>
