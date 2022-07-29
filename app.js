window.onload = function() {
  
// Allow the user to vote on preferred answer
$('.vote-once').on('click', function() {

  $(this).children('.heart-icon-empty').removeClass('heart-icon-empty').addClass('heart-icon-full');
  $heartCount = $(this).children('.heart-count');
  $heartCount.addClass('text-green');
  $heartCountString = $heartCount.text()
  $heartCountNumber = parseInt($heartCountString);
  $heartCountUpdated = $heartCountNumber+1;
  $heartCount.text($heartCountUpdated);

  // Prevent user from voting on same question more than once
  $(this).parent().parent().parent().children().children().children('.vote-once').off();
  
});

// Toggle to view more or fewer responses
$('.view-link').on('click', function() {
  if ($(this).hasClass('more')) {
    $(this).parent().parent().children('.replies').children('.additional-replies').removeClass('hide').addClass('show');
    $(this).text('View fewer responses');
    $(this).removeClass('more').addClass('fewer');
  } else {
    $(this).parent().parent().children('.replies').children('.additional-replies').removeClass('show').addClass('hide');
    $(this).text('View more responses');
    $(this).removeClass('fewer').addClass('more');
  } 
})


};