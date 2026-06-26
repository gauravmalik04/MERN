# MERN
1..10 | ForEach-Object { $folder = "day_{0:D2}" -f $_ mkdir $folder "## $folder" | Out-File "$folder/README.md" }