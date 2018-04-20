<?php
include 'upload_image.php';
?>
<!DOCTYPE html>
<html>
<body>
<form method="post" onsubmit="<?php upload_img();?>" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload Image" name="submit">
</form>
<img src="<?php echo $target_file; ?>" style="width:100px;height:100px;" id = "img">
</body>
</html>