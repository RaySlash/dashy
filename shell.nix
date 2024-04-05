{ pkgs ? import <nixpkgs> { config.allowUnfree = true; }}:


pkgs.mkShell {
  shellHook = ''
    export ANDROID_HOME=$HOME/Android/Sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/platform-tools
  '';

  packages = with pkgs; [
    android-studio
    android-tools
    pkg-config
    nodejs
    yarn
    watchman
    jdk17
    nodePackages.eas-cli
    nodePackages.vercel
    nodePackages.expo-cli
  ];
}
