import qrcode
from PIL import Image, ImageDraw

# Data to be encoded
data = "https://www.bl4ckoutlabs.com/"

# Generate QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)
qr.add_data(data)
qr.make(fit=True)

# Create an image from the QR Code instance
img_qr = qr.make_image(fill='black', back_color='white').convert('RGB')

# Load the logo image
logo = Image.open("logo.png")  # Change this to the path of your logo file

# Calculate dimensions to position the logo
logo_size = 70  # size of the logo
box_size = (img_qr.size[0] - logo_size) // 2
logo = logo.resize((logo_size, logo_size))

# Paste the logo image
img_qr.paste(logo, (box_size, box_size), logo)

# Save the resulting QR code with logo
img_qr.save("custom_qr_code.png")

round_corners = True

if round_corners:
    def round_corners(image, radius):
        """ Round the corners of an image """
        rounded = Image.new('RGBA', image.size)
        mask = Image.new('L', image.size, 0)
        draw = ImageDraw.Draw(mask)
        draw.rounded_rectangle((0, 0) + image.size, radius=radius, fill=255)
        rounded.paste(image, (0, 0), mask)
        return rounded

    # Assume img_qr is the QR code image with the logo embedded
    img_qr = Image.open("custom_qr_code.png")  # Load your previously created QR code with logo

    # Radius of the rounded corners
    radius = 50  # You can adjust the radius size as per your preference

    # Apply rounded corners
    img_rounded = round_corners(img_qr, radius)

    # Save the final image
    img_rounded.save("rounded_qr_code.png")
