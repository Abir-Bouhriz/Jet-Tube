<template>
  <v-menu offset-y left>
        <template v-slot:activator="{ on }">
          <v-btn small color="red" depressed fab v-on="on" class="white--text">
            BA
          </v-btn>
        </template>

        <v-card>
          <v-list class="overflow-y-auto" style="max-height: calc(100vh - 100px)">
            <v-list-item>
              <v-list-item-avatar>
                <img :src="`profile.jpg`" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Bouhriz Abir</v-list-item-title>
                <v-list-item-subtitle class="blue--text"
                  >Manage your Google account</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

          <v-divider></v-divider>

            <v-list-item to="/channel">
              <v-list-item-icon>
                <v-icon>mdi-account-box</v-icon>
              </v-list-item-icon>
              <v-list-item-title >Your channel</v-list-item-title>
            </v-list-item>
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-currency-usd-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Purchases and memeberships</v-list-item-title>
            </v-list-item>
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-youtube-studio</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Jet-Tube Studio</v-list-item-title>
            </v-list-item>
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-account-box-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Switch account</v-list-item-title>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-menu-right</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-login-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sign out</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="toggle_dark_mode">
              <v-list-item-icon >
                <v-icon >mdi-theme-light-dark</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Appearance: Device theme</v-list-item-title>
            </v-list-item>
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-translate</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Language: English</v-list-item-title>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-menu-right</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-longitude</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Location: Algeria</v-list-item-title>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-menu-right</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-account-box</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Your data in Jet-Tube</v-list-item-title>
            </v-list-item>
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-help-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Help</v-list-item-title>
            </v-list-item>
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-comment-alert</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Send Feedback</v-list-item-title>
            </v-list-item>
            <v-list-item >
              <v-list-item-icon>
                <v-icon>mdi-keyboard-settings</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Keyboard shortcut</v-list-item-title>
            </v-list-item>
            <v-list-item router to="/studio">
              <v-list-item-title>Restricted Mode: Off</v-list-item-title>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-menu-right</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
</template>

<script>
export default {
 methods: {
      toggle_dark_mode () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
    },
    mounted() {
      // this.$vuetify.theme.themes.light.primary = '#ff0000'
      const theme = localStorage.getItem("dark_theme");
        if (theme) {
            if (theme == "true") {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }
        }

    }
}
</script>

<style>

</style>