from=$1
to=$2
for f in $(find $1 -type l); do
	target="${f/$1/$2}";
	echo "Copying $f to $target";
	cp $f $target -a;
done
